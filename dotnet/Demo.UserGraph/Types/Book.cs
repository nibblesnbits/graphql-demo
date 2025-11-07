using Demo.Data.Books;
using Demo.Data.Books.Models;
using Microsoft.EntityFrameworkCore;

namespace Demo.UserGraph.Types;

public class BookObjectType : ObjectType<Book> {
    protected override void Configure(IObjectTypeDescriptor<Book> descriptor) {
        descriptor
            .Field(b => b.Id).ID();
        descriptor
            .ImplementsNode()
            .IdField(b => b.Id)
            .ResolveNode(async (context, id) => {
                var factory = context.Service<IDbContextFactory<BooksDbContext>>();
                using var dbContext = await factory.CreateDbContextAsync();
                return await dbContext.Books.FindAsync([id]);
            });
        // add pagination to Characters field
        descriptor
            .Field(b => b.Characters)
            .UsePaging<CharacterObjectType>();
    }
}
