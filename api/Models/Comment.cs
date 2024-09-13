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
        [StringLength(100)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Content { get; set; } = string.Empty;

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

        [ForeignKey(nameof(Stock))]
        public int? StockId { get; set; }
        
        public Stock? Stock { get; set; }

        [Required]
        [ForeignKey(nameof(AppUser))]
        public string? AppUserId { get; set; }

        public AppUser? AppUser { get; set; }
    }
}
