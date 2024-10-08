﻿namespace Straysafe.Backend.Common.DAL.Models
{
    public class Reports
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string AnimalType { get; set; } = string.Empty;
        public string Gender {  get; set; } = string.Empty;
        public double Weight { get; set; } = 0;
        public double Height { get; set; } = 0;
        public string ReportType {  get; set; } = string.Empty;
        public string Breed {  get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Remarks { get; set; } = string.Empty;
    }
}