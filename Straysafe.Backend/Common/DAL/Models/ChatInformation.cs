using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Straysafe.Backend.Common.DAL.Models
{
    public class ChatInformation
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid ChatInfo { get; set; }
        public string Topic { get; set; }
        public string Metadata { get; set; }
    }
}
