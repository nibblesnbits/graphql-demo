
using Demo.Data.Books;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddDbContextFactory<BooksDbContext>(
        options => options.UseInMemoryDatabase("BooksDb"));

builder
    .AddGraphQL()
    .RegisterDbContextFactory<BooksDbContext>()
    .AddTypes()
    .AddDbContextCursorPagingProvider()
    .AddMutationConventions()
    .AddGlobalObjectIdentification()
    .AddInMemorySubscriptions()
    .InitializeOnStartup();

var app = builder.Build();

app.UseWebSockets();

app.MapGraphQL();

app.RunWithGraphQLCommands(args);

