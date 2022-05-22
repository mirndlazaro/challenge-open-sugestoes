using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    public class Suggestion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        [StringLength(100)]
        public string? Title { get; set; } = string.Empty;

        [Required]
        [StringLength(10000)]
        public string Description { get; set; } = string.Empty;

        public virtual Department? Department { get; set; }
        public virtual Employee? Employee { get; set; }
    }
}
