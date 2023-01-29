using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace HRM_System.Models
{
    public class LoginModel
    {
        public string? UserName { get; set; }
        public string? Password { get; set; }
        public string? userRole { get; set; }

        public static List<LoginModel> Users =
            new List<LoginModel>{
                new LoginModel("mehedi", "123", "admin"),
                new LoginModel("shimanto", "123", "software"),
                new LoginModel("fahim", "123", "system") };
      
        public LoginModel()
        {

        }
        private LoginModel(string? userName, string? password, string userRole)
        {
            UserName = userName;
            Password = password;
            this.userRole = userRole;
        }


    }
}
