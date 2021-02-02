using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PortfolioService.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PortfolioService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly AppContext _context;

        public CommentController(AppContext context)
        {
            this._context = context;
        }

        // GET: api/Comment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comment>>> Get()
        {
            return Ok(await _context.Comments.ToArrayAsync());
        }

        // GET: api/Comment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comment>> Get(string id)
        {
            return Ok(await _context.Comments.FirstOrDefaultAsync(p => p.Id == id));
        }

        // POST: api/Comment
        [HttpPost]
        public async Task<ActionResult<Comment>> Post([FromBody] Comment comment)
        {
            comment.Id = Guid.NewGuid().ToString();
            await _context.Comments.AddAsync(comment);
            await _context.SaveChangesAsync();
            return Ok(comment);
        }

        // PUT: api/Comment/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Comment>> Put(string id, [FromBody] Comment comment)
        {
            throw new NotImplementedException();
        }

        // DELETE: api/Comment/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var comment = await _context.Comments.FirstOrDefaultAsync(i => i.Id == id);
            if (comment == null) return NotFound();
            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
