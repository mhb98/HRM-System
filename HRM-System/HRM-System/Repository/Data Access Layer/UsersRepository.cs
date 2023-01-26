using HRM_System.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HRM_System.Repository.Data_Access_Layer
{
    public class UsersRepository : Interface.IUsersRepository
    {

        private readonly IConfiguration Configuration;//connection Interface

        public UsersRepository(IConfiguration config)
        {
            Configuration = config;//need it for Configuration in line 25
                                   //  _roleManager= roleManager;
        }

        public String loginAsync([FromBody] LoginModel user)
        {
            //var claim1= new List<Claim>();

            //foreach(LoginModel individualUser in LoginModel.Users)
            //{

            //    if(individualUser.UserName.Equals(user.UserName) && individualUser.Password.Equals(user.Password))
            //    {
            //        claim1 = new List<Claim>
            //    {
            //        new Claim(ClaimTypes.Name, user.UserName),
            //        new Claim(ClaimTypes.Role, user.userRole)

            //    };
            //    }

            //}


            var tokenString = "";

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role, user.userRole)

                };
            var tokeOptions = new JwtSecurityToken(
            issuer: "https://localhost:7142",
            audience: "https://localhost:7142",
            claims: claims,
            expires: DateTime.Now.AddMinutes(5),
            signingCredentials: signinCredentials
            );

            tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);


            return tokenString;

        }
    }
}

