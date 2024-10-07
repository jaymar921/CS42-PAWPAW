using Microsoft.AspNetCore.Mvc;
using Straysafe.Backend.Common.DAL.Models;
using Straysafe.Backend.Common.DTO;
using Straysafe.Backend.Common.DTO.Auth;
using Straysafe.Backend.Services.Repositories;

namespace Straysafe.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController(ILogger<UserController> logger, IRepository<User> repository) : Controller
    {
        private readonly ILogger<UserController> _logger = logger;
        private readonly IRepository<User> _repository = repository;

        [HttpPost("Register")]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            bool result = await _repository.AddAsync(user);

            if (result) return Ok(new { Message = "User has been Registered"});
            return BadRequest(new { Message = "Failed to Register User" });
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _repository.GetAll();

            return Ok(result);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete(Guid Id)
        {
            var result = await _repository.DeleteAsync(Id);

            return Ok(new { Message = "Delete Action Triggered", Success = result });
        }

        [HttpPatch("Update")]
        public async Task<IActionResult> Login([FromBody] User updatedUser)
        {
            var user = _repository.GetAll().FirstOrDefault(u => u.Id == updatedUser.Id);

            if (user != null)
            {
                user.FirstName = updatedUser.FirstName;
                user.LastName = updatedUser.LastName;
                user.Email = updatedUser.Email;
                user.Password = updatedUser.Password;
                user.ContactNumber = updatedUser.ContactNumber;
                user.Address = updatedUser.Address;
                user.Role = updatedUser.Role;
                user.Locked = updatedUser.Locked;

                bool result = await _repository.UpdateAsync(user);

               if(result)
                {
                    return Ok(new
                    {
                        Message = "User was updated successfully",
                        Data = new UserDTO
                        {
                            Id = user.Id,
                            FirstName = user.FirstName,
                            LastName = user.LastName,
                            Email = user.Email,
                            ContactNumber = user.ContactNumber,
                            Address = user.Address,
                            Role = user.Role,
                            Locked = user.Locked,
                        }
                    });
                }

            }

            return BadRequest(new { Message = "Failed to update user" });
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserCredential credential)
        {
            var user = _repository.GetAll().FirstOrDefault(u => 
            u.Email.ToLower().Equals(credential.Email.ToLower()) && u.Password.Equals(credential.Password));

            
            if(user != null)
            {
                return Ok(new
                {
                    Message = "Logged In Successfully",
                    Data = new UserDTO
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email,
                        ContactNumber = user.ContactNumber,
                        Address = user.Address,
                        Role = user.Role,
                        Locked = user.Locked,
                    }
                });
            }
            
            return Unauthorized(new { Message = "Invalid Credentials", Data = false});
        }
    }
}
