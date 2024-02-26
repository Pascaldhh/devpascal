using devpascal_backend.Interfaces;
using devpascal_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace devpascal_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : Controller
{
    public IMailSender Mailer { get; set; }

    public ContactController(IMailSender mailer)
    {
        Mailer = mailer;
    }
    
    [HttpPost]
    public IActionResult Post([FromBody] Mail value)
    {
        Mailer.Send(new Mail(new Header("test", "test", "test", "test"), new Body("test")));
        return Content(value.Header.Sender);
    }
}