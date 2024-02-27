using System.Net.Mail;
using devpascal_backend.Interfaces;
using devpascal_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace devpascal_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : Controller
{
    public IMailSender Mailer { get; set; }
    public IMailHandler MailHandler { get; set; }

    public ContactController(IMailSender mailer, IMailHandler mailHandler)
    {
        Mailer = mailer;
        MailHandler = mailHandler;
    }
    
    [HttpPost]
    public JsonResult Post([FromBody] Mail mail)
    {
        Error error = MailHandler.ValidateMail(mail);

        if (error.HasError())
            return Json(error);

        try
        {
            Mailer.Send(mail);
            return Json(new MailResponse());
        }
        catch (SmtpException e)
        {
            return Json(new MailResponse{HasSend = false});
        }
    }
}