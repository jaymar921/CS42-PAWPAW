using Microsoft.AspNetCore.Mvc;
using Straysafe.Backend.Services.Media;

namespace Straysafe.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MediaController(IWebHostEnvironment webHostEnvironment) : Controller
    {
        private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

        [HttpPost("Upload")]
        public async Task<IActionResult> UploadFile([FromForm] IFormFile file)
        {
            if (file == null)
                return BadRequest(new { Message = "Form Data should not be null", Success = false});

            if(file.FileName == null)
                return BadRequest(new { Message = "Data should be included in the form", Success = false });

            var success = await FileHandler.SaveFile(_webHostEnvironment, file);

            if (success) return Ok(new { Message = "File was uploaded", Success = true });
            return BadRequest(new { Message = "There was an issue uploading the file", Success = false });
        }

    }
}
