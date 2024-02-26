
namespace devpascal_backend.Interfaces;

public interface IMailSender
{
    public void Send(IMail mail);
}