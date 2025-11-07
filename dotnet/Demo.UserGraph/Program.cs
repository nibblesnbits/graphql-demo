using Demo.Data.Books;
using Microsoft.EntityFrameworkCore;
using Demo.UserGraph.DataLoaders;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddDbContextFactory<BooksDbContext>(
        options => options.UseInMemoryDatabase("BooksDb"));

builder
    .AddGraphQL()
    .RegisterDbContextFactory<BooksDbContext>()
    .AddTypes()
    .AddDataLoader<AuthorsByNameSearchDataLoader>()
    .AddDbContextCursorPagingProvider()
    .AddSorting()
    .AddMutationConventions()
    .AddGlobalObjectIdentification()
    .AddInMemorySubscriptions()
    .InitializeOnStartup();

var app = builder.Build();

app.UseWebSockets();

app.MapGraphQL();

app.RunWithGraphQLCommands(args);

