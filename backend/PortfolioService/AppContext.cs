using Microsoft.EntityFrameworkCore;
using PortfolioService.Models;

namespace PortfolioService
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options) : base(options)
        {
        }
        public DbSet<Post> Posts { get; set; }
    }
}
