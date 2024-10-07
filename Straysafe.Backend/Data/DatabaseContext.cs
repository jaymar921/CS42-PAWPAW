using Microsoft.EntityFrameworkCore;
using Straysafe.Backend.Common.DAL.Models;

namespace Straysafe.Backend.Data
{
    public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
    }
}
