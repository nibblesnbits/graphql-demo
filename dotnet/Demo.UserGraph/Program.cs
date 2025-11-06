
var builder = WebApplication.CreateBuilder(args);

builder
    .AddGraphQL()
    .AddTypes()
    .AddMutationConventions()
    .AddGlobalObjectIdentification()
    .AddInMemorySubscriptions()
    .InitializeOnStartup();

var app = builder.Build();

app.UseWebSockets();

app.MapGraphQL();

// This is the command-line entry that triggers the schema export
app.RunWithGraphQLCommands(args);

