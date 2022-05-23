using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
	public class Employee
	{
        [Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int ID { get; set; }

		[Required]
		[StringLength(100, ErrorMessage = "First name cannot be longer than 100 characters.")]
		public string Name { get; set; } = string.Empty;
	}
}
