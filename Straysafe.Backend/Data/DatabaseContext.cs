using Microsoft.EntityFrameworkCore;
using Straysafe.Backend.Common.DAL.Models;
using Straysafe.Backend.Helper;

namespace Straysafe.Backend.Data
{
    public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>().HasData(
                [
                    new User { 
                        Id = Guid.NewGuid(),
                        Email = "admin",
                        Password = Hasher.HashSHA512("P@ssw0rd"),
                        Role = "Admin"
                    }
                ]
            );
        }
    }
}
