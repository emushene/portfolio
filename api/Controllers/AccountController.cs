using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using api.Models; // Replace with your actual namespace for AppUser and RegisterDto
using api.Dtos.Account;
using api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly SignInManager<AppUser> _signingManager;

        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser> signingManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signingManager = signingManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto){
            if(!ModelState.IsValid)
            return BadRequest(ModelState);
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());

            if(user == null)
            return Unauthorized("username not Valid");

            var result = await _signingManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if(!result.Succeeded) return Unauthorized("Username not found or password not correct");

            return Ok(
                new NewUserDto{
                    UserName = user.UserName,
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user)
                }
            );


        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var appUser = new AppUser
                {
                    UserName = registerDto.Username,
                    Email = registerDto.Email
                };

                var createUser = await _userManager.CreateAsync(appUser, registerDto.Password);
                
                if (createUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(appUser, "User");

                    if (roleResult.Succeeded)
                    {
                        return Ok(
                            new NewUserDto{
                                UserName = appUser.UserName,
                                Email = appUser.Email,
                                Token = _tokenService.CreateToken(appUser)

                            }
                        );
                    }
                    else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createUser.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message); // Return just the message to avoid exposing sensitive information
            }
        }
    }
}
