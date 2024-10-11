using Microsoft.AspNetCore.Mvc;
using Straysafe.Backend.Common.DAL.Models;
using Straysafe.Backend.Services.Repositories;

namespace Straysafe.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController(IRepository<ChatData> chatDataRepository) : Controller
    {
        private readonly IRepository<ChatData> _chatDataRepository = chatDataRepository;

        [HttpPost("submit")]
        public IActionResult SubmitChat(ChatData chatData)
        {
            _chatDataRepository.AddAsync(chatData);
            return Ok(new { Message = "Success"});
        }

        [HttpGet("getall")]
        public IActionResult Retrieve()
        {
            return Ok(_chatDataRepository.GetAll());
        }

        [HttpGet("getlatest")]
        public IActionResult Retrieve([FromQuery] string chatInformation)
        {
            return Ok(new { Latest = _chatDataRepository.GetAll().Where(c => c.ChatInfo.ToString() == chatInformation).LastOrDefault() });
        }

        [HttpGet("getfirst")]
        public IActionResult GetFirst([FromQuery] string chatInformation)
        {
            return Ok(new { First = _chatDataRepository.GetAll().Where(c => c.ChatInfo.ToString() == chatInformation).FirstOrDefault() });
        }
    }
}
