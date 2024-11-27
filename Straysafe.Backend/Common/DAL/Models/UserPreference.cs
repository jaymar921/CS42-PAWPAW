using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Straysafe.Backend.Common.DAL.Models
{
    public class UserPreference
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public Guid UserId { get; set; } = Guid.Empty;
        [Required]
        public string SpaceSeparatedPreference { get; set; } = string.Empty;

        public IEnumerable<string> GetPreference()
        {
            return SpaceSeparatedPreference.Split(' ');
        }
    }
}
