﻿using Microsoft.AspNetCore.Mvc;
using Straysafe.Backend.Common.DAL.Models;
using Straysafe.Backend.Services.Repositories;

namespace Straysafe.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReportStrayController(IServiceProvider serviceProvider) : BaseController(serviceProvider)
    {

        [HttpGet("get")]
        public async Task<IActionResult> Get([FromQuery] string Id)
        {
            bool parseStatus = Guid.TryParse(Id, out var reportId);

            if (!parseStatus) return BadRequest(new { Message = "Failed to parse Id to GUID", Success = false });

            var report = await ReportRepository.GetAsync(reportId);

            if (report == null) return NotFound(new { Message = "No report found", Success = false });
            return Ok(new { Data = report, Success = true, Message = "Retrieved report" });
        }

        [HttpGet("getall")]
        public IActionResult GetAllReports([FromQuery] string reporter = "", [FromQuery] string organization = "")
        {
            var reports = ReportRepository.GetAll();

            if (!string.IsNullOrEmpty(reporter)) reports = reports.Where(x => x.Reporter.ToLower().Equals(reporter.ToLower()));
            if (!string.IsNullOrEmpty(organization)) reports = reports.Where(x => x.Organization.ToLower().Equals(organization.ToLower()));

            return Ok(new { Data = reports, Success = true, Message = "Retrieved reports" });
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddReport([FromBody] Reports report)
        {
            var result = await ReportRepository.AddAsync(report);
            var reporter = await UserRepository.GetAsync(Guid.Parse(report.Reporter));

            if (result && reporter != null)
            {
                // create an announcement
                var breedInfo = !string.IsNullOrEmpty(report.Breed) ? $"| {report.Breed}" : string.Empty;
                var announcement = new Announcement
                {
                    Title = $"{report.ReportType} | {report.Name} {breedInfo}",
                    Content = $"{reporter.FirstName} has reported a {report.ReportType} at {report.Address}. Details: {report.Remarks}. For inquiry, you may contact this person by phone ({reporter.ContactNumber}) or via email {reporter.Email}",
                    Attachment = report.Id.ToString(),
                    PostedBy = report.Reporter,
                };

                // save announcement
                await AnnouncementRepository.AddAsync(announcement);

                // add notification
                AddNotification(report.Reporter, "Report", $"reported a '{report.ReportType}' animal");
            }

            if (result)
                return Ok(new { Message = "Report added", Success = true, report.Id });
            return BadRequest(new { Message = "Failed to add report", Success = false });
        }

        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteReport([FromQuery] string Id)
        {
            bool parseStatus = Guid.TryParse(Id, out var reportId);

            if (!parseStatus) return BadRequest(new { Message = "Failed to parse Id to GUID", Success = false });

            bool result = await ReportRepository.DeleteAsync(reportId);

            if (result) return Ok(new { Message = "Report deleted successfully", Success = true });
            return BadRequest(new { Message = "Failed to delete report, not found!", Success = false });
        }

        [HttpPatch("update")]
        public async Task<IActionResult> Update([FromBody] Reports report)
        {
            var existingReport = await ReportRepository.GetAsync(report.Id);

            if (existingReport == null) return NotFound(new { Message = "Report not found, could not update", Success = false });

            // do the update
            if (!string.IsNullOrEmpty(report.Name))
                existingReport.Name = report.Name;
            if (!string.IsNullOrEmpty(report.AnimalType))
                existingReport.AnimalType = report.AnimalType;
            if (!string.IsNullOrEmpty(report.Gender))
                existingReport.Gender = report.Gender;
            if (report.Weight != 0)
                existingReport.Weight = report.Weight;
            if (report.Height != 0)
                existingReport.Height = report.Height;
            if (!string.IsNullOrEmpty(report.ReportType))
                existingReport.ReportType = report.ReportType;
            if (!string.IsNullOrEmpty(report.Breed))
                existingReport.Breed = report.Breed;
            if (!string.IsNullOrEmpty(report.Address))
                existingReport.Address = report.Address;
            if (!string.IsNullOrEmpty(report.Remarks))
                existingReport.Remarks = report.Remarks;
            if (!string.IsNullOrEmpty(report.Status))
                existingReport.Status = report.Status;
            if (!string.IsNullOrEmpty(report.Metadata))
                existingReport.Metadata = report.Metadata;
            if (!string.IsNullOrEmpty(report.Owner))
            {
                existingReport.Owner = report.Owner;
                existingReport.ReportDate = DateTime.Now;
            }
            if (!string.IsNullOrEmpty(report.Organization)){
                existingReport.Organization = report.Organization;

                // add notification
                AddNotification(report.Organization, "Report", $"updated report status for report '{report.Name}' to status: '{report.Status}'");
            }

            bool result = await ReportRepository.UpdateAsync(existingReport);
            if (!result) return BadRequest(new { Message = "Failed to Update Report", Success = false });
            return Ok(new { Message = "Updated report", Success = true, NewData = existingReport });
        }
    }
}
