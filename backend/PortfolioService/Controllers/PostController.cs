using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PortfolioService.Models;

namespace PortfolioService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly AppContext _context;

        public PostController(AppContext context)
        {
            this._context = context;
        }

        // GET: api/Post
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> Get()
        {
            return Ok(await _context.Posts.ToArrayAsync());
        }

        // GET: api/Post/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<ActionResult<Post>> Get(string id)
        {
            return Ok(await _context.Posts.FirstOrDefaultAsync(p => p.Id == id));
        }

        // POST: api/Post
        [HttpPost]
        public async Task<ActionResult<Post>> Post([FromBody] Post post)
        {
            post.Id = Guid.NewGuid().ToString();
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
            return Ok(post);
        }

        // PUT: api/Post/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Post>> Put(string id, [FromBody] Post post)
        {
            if (!await _context.Posts.AnyAsync(i => i.Id == id)) return NotFound();
            _context.Posts.Update(post);
            await _context.SaveChangesAsync();
            return Ok(post);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(i => i.Id == id);
            if (post == null) return NotFound();
            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();
            return NoContent();

        }
    }
}
