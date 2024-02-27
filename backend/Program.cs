using devpascal_backend.Interfaces;
using devpascal_backend.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRouting(options => options.LowercaseUrls = true);

builder.Services.AddSingleton<IMailSender, MailTrapMailer>();
builder.Services.AddSingleton<IMailHandler, MailHandler>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader();
    });
});

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
