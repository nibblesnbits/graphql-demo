using HotChocolate.Subscriptions;

namespace Demo.UserGraph.Types;

[MutationType]
public class Mutation {

    public async Task<Book> AddBook([Service] ITopicEventSender subscriptionSender, BookInput input, CancellationToken cancellationToken) {
        var book = Book.GetFakeBook(Guid.NewGuid(), input.Title);
        await subscriptionSender.SendAsync(nameof(Subscription.OnBookAdded), book, cancellationToken);
        return book;
    }
}

public record BookInput(string Title);

public class BookInputType : InputObjectType<BookInput>;
