namespace Demo.Data.Users.Models;

public partial class Admin {
    public Guid Id { get; set; }

    public virtual Client IdNavigation { get; set; } = null!;
}
