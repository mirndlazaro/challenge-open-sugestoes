using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuggestionsController : ControllerBase
    {
        private readonly DataContext _context;

        public SuggestionsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Suggestions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Suggestion>>> GetSuggestions()
        {
          if (_context.Suggestions == null)
          {
              return NotFound();
          }
            return await _context.Suggestions.ToListAsync();
        }

        // GET: api/Suggestions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Suggestion>> GetSuggestion(int id)
        {
          if (_context.Suggestions == null)
          {
              return NotFound();
          }
            var suggestion = await _context.Suggestions.FindAsync(id);

            if (suggestion == null)
            {
                return NotFound();
            }

            return suggestion;
        }

        // PUT: api/Suggestions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSuggestion(int id, Suggestion suggestion)
        {
            if (id != suggestion.Id)
            {
                return BadRequest();
            }

            _context.Entry(suggestion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SuggestionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Suggestions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Suggestion>> PostSuggestion(Suggestion suggestion)
        {
          if (_context.Suggestions == null)
          {
              return Problem("Entity set 'DataContext.Suggestions'  is null.");
          }
            _context.Suggestions.Add(suggestion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSuggestion", new { id = suggestion.Id }, suggestion);
        }

        // DELETE: api/Suggestions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSuggestion(int id)
        {
            if (_context.Suggestions == null)
            {
                return NotFound();
            }
            var suggestion = await _context.Suggestions.FindAsync(id);
            if (suggestion == null)
            {
                return NotFound();
            }

            _context.Suggestions.Remove(suggestion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SuggestionExists(int id)
        {
            return (_context.Suggestions?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
