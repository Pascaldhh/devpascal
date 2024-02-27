using System.Text.Json.Serialization;
using devpascal_backend.Models;

namespace devpascal_backend.Interfaces;

public interface IMail
{
    public Header Header { get; set; }
    public Body Body { get; set; }
}