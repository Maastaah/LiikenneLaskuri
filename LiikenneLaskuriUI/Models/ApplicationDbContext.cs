using Microsoft.EntityFrameworkCore;

namespace LiikenneLaskuriUI.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<LiikenneLaskuriData> LiikenneLaskuriData { get; set; }
    }
}
