using devpascal_backend.Interfaces;
using System.Net;
using System.Net.Mail;

namespace devpascal_backend.Services;

public class MailTrapMailer : IMailSender
{
    private SmtpClient Connect()
    {
        return new SmtpClient(Config.MailTrapHost, Config.MailTrapPort)
        {
            Credentials = new NetworkCredential(Config.MailTrapUser, Config.MailTrapPass),
            EnableSsl = true
        };
    }
    
    public void Send(IMail mail)
    {
        SmtpClient client = Connect();
        client.Send("contact@devpascal.com", "haan.pascal@hotmail.com", "Hello world", "testbody");
    }
}