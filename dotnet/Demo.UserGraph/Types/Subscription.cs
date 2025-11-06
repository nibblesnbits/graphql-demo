namespace Demo.UserGraph.Types;

[SubscriptionType]
public class Subscription {

    [Subscribe(MessageType = typeof(Book))]
    public Task<Book> OnBookAdded([EventMessage] Book book) {
        
        return Task.FromResult(book);
    }
}
