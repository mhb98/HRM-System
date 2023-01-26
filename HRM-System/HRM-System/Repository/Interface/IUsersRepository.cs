using HRM_System.Models;
using Microsoft.AspNetCore.Mvc;

namespace HRM_System.Repository.Interface
{
    public interface IUsersRepository
    {
        public String loginAsync([FromBody] LoginModel user);
    }
}
