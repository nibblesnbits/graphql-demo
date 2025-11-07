using Demo.Data.Books;
using Demo.Data.Books.Models;
using HotChocolate.Subscriptions;

namespace Demo.UserGraph.Types;

[MutationType]
public class Mutation {

    public async Task<Book> AddBook(BooksDbContext dbContext, BookInput input, CancellationToken cancellationToken) {
        var entity = dbContext.Books.Add(new Book { Title = input.Title, Id = Guid.NewGuid() });
        await dbContext.SaveChangesAsync(cancellationToken);
        return entity.Entity;
    }

    public async Task<Author> AddAuthor(BooksDbContext dbContext, AuthorInput input, CancellationToken cancellationToken) {

        var entity = dbContext.Authors.Add(new Author { Name = input.Name, Id = Guid.NewGuid() });
        await dbContext.SaveChangesAsync(cancellationToken);
        return entity.Entity;
    }

    public async Task<Character> AddCharacter([Service] ITopicEventSender subscriptionSender, BooksDbContext dbContext, CharacterInput input, CancellationToken cancellationToken) {

        var entry = dbContext.Characters.Add(new Character { Name = input.Name });
        await dbContext.SaveChangesAsync(cancellationToken);
        await subscriptionSender.SendAsync(nameof(Subscription.OnCharacterAdded), entry.Entity, cancellationToken);
        return entry.Entity;
    }
}

public record BookInput(string Title);

public class BookInputType : InputObjectType<BookInput>;

public record AuthorInput(string Name);

public class AuthorInputType : InputObjectType<AuthorInput>;

public record CharacterInput(string Name);

public class CharacterInputType : InputObjectType<CharacterInput>;
