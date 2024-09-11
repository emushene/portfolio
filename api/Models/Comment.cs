using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Comments")]
    public class Comment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)] // Optional: specify a max length for the title
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Content { get; set; } = string.Empty;

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

        public int? StockId { get; set; }
        
        public Stock? Stock { get; set; }

        [Required]
        public string? AppUserId { get; set; }

       
        public AppUser AppUser { get; set; }
    }
}
