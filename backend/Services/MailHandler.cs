using devpascal_backend.Interfaces;
using devpascal_backend.Models;

namespace devpascal_backend.Services;

public class MailHandler
{
    public IMail CreateMail(Header header, Body body)
    {
        return new Mail(header, body);
    }
}