using Demo.Data.Books;
using Demo.Data.Books.Models;

namespace Demo.UserGraph.Types;

[QueryType]
public class Query {
    public async Task<Book?> GetBook([ID<Book>]Guid id, BooksDbContext dbContext) =>
        await dbContext.Books.FindAsync(id);

    public IQueryable<Book> GetBooks(BooksDbContext dbContext) =>
        dbContext.Books;

    public IQueryable<Author> GetAuthors(BooksDbContext dbContext) =>
        dbContext.Authors;

    [UsePaging(typeof(CharacterObjectType))]
    public IQueryable<Character> GetCharacters(BooksDbContext dbContext) =>
        dbContext.Characters;

}
