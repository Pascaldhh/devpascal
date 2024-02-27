using devpascal_backend.Interfaces;

namespace devpascal_backend.Models;

public class Body
{
    public string Message { get; set; }
    public Body(string message)
    {
        Message = message;
    }

}