namespace Demo.UserGraph.Types;

public class Character(int id, string name) {

    public int Id => id;
    public string Name => name;
    public override string ToString() => name;
}

public class CharacterObjectType : ObjectType<Character> {
    protected override void Configure(IObjectTypeDescriptor<Character> descriptor) {
        descriptor
            .ImplementsNode()
            .IdField(f => f.Id)
            .ResolveNode(async (context, id) => {
                return new Character(1, "test");
            });
    }
}
