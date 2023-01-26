using HRM_System.Models;
using HRM_System.Repository.Data_Access_Layer;
using HRM_System.Repository.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HRM_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IUsersRepository _UsersRepository;


        public AuthController(IConfiguration configuration)
        {
            this._UsersRepository = new UsersRepository(configuration);
            
        }


        [HttpPost("login")]
        [AllowAnonymous]

        public IActionResult Login([FromBody] LoginModel user)
        {
            var JWTtoken = "";

            if (user is not null)
            {
                JWTtoken = _UsersRepository.loginAsync(user);

                if (JWTtoken.Length > 25)
                {
                    return Ok(new AuthenticatedResponse { Token = JWTtoken });
                }

            }

            else if (user is null)
            {
                return BadRequest("Invalid client request");
            }

            return Unauthorized();
        }
    }
}
