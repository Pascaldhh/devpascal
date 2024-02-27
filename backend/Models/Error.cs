using System.Reflection;

namespace devpascal_backend.Models;

public class Error : MailResponse
{
    public string? Sender { get; set; }
    public string? SenderName { get; set; }
    public string? Message { get; set; }

    public void SetError(string property, string value)
    {
        PropertyInfo[] properties = GetType().GetProperties();
        foreach (PropertyInfo info in properties)
        {
            if(info.Name == property) info.SetValue(this, value);
        }
    }

    public bool HasError()
    {
        string[] array = [Sender, SenderName];
        HasSend = false;
        return array.Any(item => !string.IsNullOrEmpty(item));
    }
}