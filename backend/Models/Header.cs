using devpascal_backend.Interfaces;

namespace devpascal_backend.Models;

public class Header
{
    public string Sender { get; set; }
    public string SenderName { get; set; }
    public Header(string sender, string senderName)
    {
        Sender = sender;
        SenderName = senderName;
    }
}
