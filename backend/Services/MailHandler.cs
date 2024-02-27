using System.Net.Mail;
using devpascal_backend.Interfaces;
using devpascal_backend.Models;

namespace devpascal_backend.Services;

public class MailHandler : IMailHandler
{
    private bool IsEmail(string mail)
    {
        bool valid = true;
        try { MailAddress emailAddress = new(mail); }
        catch { valid = false; }
        return valid;
    }

    private bool StringValidSize(string value, int length)
        => value.Length <= length;


    public Error ValidateMail(IMail mail)
    {
        Error error = new();
        string[] field = [mail.Header.Sender, mail.Header.SenderName, mail.Body.Message];
        string[] propertyNames = [nameof(mail.Header.Sender), nameof(mail.Header.SenderName), nameof(mail.Body.Message)];
        string[] fieldNames = ["Email", "Name", "Message"];
        int[] minSizes = [3, 3, 3];
        int[] maxSizes = [80, 120, 600];
        for(int i = 0; i < field.Length; i++)
        {
            if (!StringValidSize(field[i], maxSizes[i])) error.SetError(propertyNames[i], $"{fieldNames[i]} can't be larger then {maxSizes[i]} characters.");
            if (StringValidSize(field[i], minSizes[i])) error.SetError(propertyNames[i], $"{fieldNames[i]} can't be smaller then {minSizes[i]+1} characters.");
            if(string.IsNullOrEmpty(field[i])) error.SetError(propertyNames[i], $"{fieldNames[i]} can't be empty.");
        }

        if (!IsEmail(mail.Header.Sender)) error.Sender = $"{fieldNames[0]} is not valid.";

        return error;
    }
}