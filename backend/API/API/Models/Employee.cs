using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
	public class Employee
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		[Key, Column(Order = 0)]
		public int Id { get; set; }

		[Required]
		[StringLength(100)]
		public string Title { get; set; } = string.Empty;
	}
}
