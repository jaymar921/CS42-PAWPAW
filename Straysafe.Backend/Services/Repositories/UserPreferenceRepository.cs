using Microsoft.EntityFrameworkCore;
using Straysafe.Backend.Common.DAL.Models;
using Straysafe.Backend.Data;

namespace Straysafe.Backend.Services.Repositories
{
    public class UserPreferenceRepository(DatabaseContext databaseContext) : IRepository<UserPreference>
    {
        private readonly DatabaseContext _databaseContext = databaseContext;

        public async Task<bool> AddAsync(UserPreference entity)
        {
            try
            {
                entity.Id = Guid.NewGuid();
                await _databaseContext.UserPreferences.AddAsync(entity);
                await _databaseContext.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var data = await GetAsync(id);
            if (data == null) return false;

            _databaseContext.UserPreferences.Remove(data);
            await _databaseContext.SaveChangesAsync();

            return true;
        }

        public IEnumerable<UserPreference> GetAll()
        {
            return _databaseContext.UserPreferences;
        }

        public async Task<UserPreference?> GetAsync(Guid id)
        {
            return await _databaseContext.UserPreferences.FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task<bool> UpdateAsync(UserPreference entity)
        {
            try
            {
                _databaseContext.UserPreferences.Update(entity);
                await _databaseContext.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
