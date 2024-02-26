using devpascal_backend.Interfaces;

namespace devpascal_backend.Models;

public class Mail : IMail
{
    public Header Header { get; set; }
    public Body Body { get; set; }

    public Mail(Header header, Body body)
    {
        Header = header;
        Body = body;
    }
}