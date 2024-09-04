using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;
        public CommentController(ICommentRepository commentRepo)
        {
            _commentRepo = commentRepo;
        }
        //GET
        [HttpGet]

        public async Task<IActionResult> GetAll(){
          var comments = await _commentRepo.GetAllAsync();
            var commentDtos = comments.Select(c => c.ToCommentDto());
            return Ok(commentDtos);
        }

        //GET BY ID - ONE TO MANY
        [HttpGet("{id}")]
            public async Task<IActionResult> GetById([FromRoute] int id){
                var comment = await _commentRepo.GetByIdAsync(id);

                if(comment == null ){
                    return NotFound();
                }

                return Ok(comment.ToCommentDto());

            }

        //POST
        //PUT
        //DELETE





    }
}