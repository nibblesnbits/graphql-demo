namespace Demo.UserGraph.Types;

public record Book(Guid Id, string Title, Author Author, ICollection<Character> Characters) {
    public static Book GetFakeBook(Guid? id = default, string title = "") =>
        new(id ?? Guid.NewGuid(), title ?? $"Book of {Guid.NewGuid().ToString()[..8]}", new Author("Sample Author"), [
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
            new Character(new Random().Next() % 1000, $"Character {Guid.NewGuid().ToString()[..5]}"),
        ]);
    public static IEnumerable<Book> GetFakeBooks(int count) {
        for (var i = 0; i < count; i++) {
            yield return GetFakeBook();
        }
    }
}

public class BookObjectType : ObjectType<Book> {
    protected override void Configure(IObjectTypeDescriptor<Book> descriptor) {
        descriptor
            .Field(b => b.Id).ID();
        descriptor
            .ImplementsNode()
            .IdField(b => b.Id)
            .ResolveNode((context, id) => {
                return Task.FromResult(Book.GetFakeBook(id));
            });
        // add pagination to Characters field
        descriptor
            .Field(b => b.Characters)
            .UsePaging<CharacterObjectType>();
    }
}
