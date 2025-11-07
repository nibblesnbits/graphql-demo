using Demo.Data.Books;
using Demo.Data.Books.Models;

namespace Demo.UserGraph.Types;

[SubscriptionType]
public class Subscription {

    [Subscribe(MessageType = typeof(Book))]
    public async Task<Book?> OnCharacterAdded([ID<Book>] Guid bookId, [EventMessage] Character character, BooksDbContext dbContext) {
        var book = await dbContext.Books.FindAsync([bookId]);
        if (book is null) {
            return default;
        }

        if (book.Characters is null) {
            await dbContext.Entry(book).Collection(b => b.Characters).LoadAsync();
        }
        var isInBook = book.Characters!.Any(c => c.Id == character.Id);

        return isInBook ? book : default;
    }
}
