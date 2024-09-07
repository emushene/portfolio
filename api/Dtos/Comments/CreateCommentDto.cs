using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comments
{
    public class CreateCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must be 5 Characters or more")]
        [MaxLength(280, ErrorMessage = " tITLE Can not be more thaqn 280 characters")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [MinLength(5, ErrorMessage = "Content must be 5 Characters or more")]
        [MaxLength(280, ErrorMessage = "Content can not be more thaqn 280 characters")]
        public string Content { get; set; } = string.Empty;
    }
}