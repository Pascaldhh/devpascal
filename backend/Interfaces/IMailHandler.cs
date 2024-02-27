using devpascal_backend.Models;

namespace devpascal_backend.Interfaces;

public interface IMailHandler
{
    public Error ValidateMail(IMail mail);
}