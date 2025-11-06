namespace Demo.UserGraph.Types;

[QueryType]
public class Query {
    public Book GetBook([ID<Book>] Guid id) => Book.GetFakeBook(id);
    public IEnumerable<Book> GetBooks(int count) => Book.GetFakeBooks(count);

}
