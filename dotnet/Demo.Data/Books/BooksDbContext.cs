using Demo.Data.Books.Models;
using Microsoft.EntityFrameworkCore;

namespace Demo.Data.Books;

public partial class BooksDbContext(DbContextOptions<BooksDbContext> options) : DbContext(options) {
    public virtual DbSet<Book> Books { get; set; }

    public virtual DbSet<Author> Authors { get; set; }

    public virtual DbSet<Character> Characters { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {

        modelBuilder.Entity<Book>(entity => {
            entity.ToTable("Books");

            // Primary key
            entity.HasKey(b => b.Id);

            // Properties
            entity.Property(b => b.Title)
            .HasMaxLength(200)
            .IsRequired();

            // Relationship: Book -> Author (many books to one author)
            // Use a shadow foreign key `AuthorId` so we don't require an explicit property on the model.
            entity.HasOne(b => b.Author)
            .WithMany(a => a.Books)
            .HasForeignKey("AuthorId")
            .OnDelete(DeleteBehavior.Cascade);

            // Many-to-many: Book <-> Character
            entity.HasMany(b => b.Characters)
            .WithMany(c => c.Books)
            .UsingEntity<Dictionary<string, object>>("BookCharacters",
            join => join.HasOne<Character>()
            .WithMany()
            .HasForeignKey("CharacterId")
            .OnDelete(DeleteBehavior.Cascade),
            join => join.HasOne<Book>()
            .WithMany()
            .HasForeignKey("BookId")
            .OnDelete(DeleteBehavior.Cascade),
            je => {
                je.HasKey("BookId", "CharacterId");
                je.ToTable("BookCharacters");
                je.HasIndex("CharacterId").HasDatabaseName("IX_BookCharacters_CharacterId");
                je.HasIndex("BookId").HasDatabaseName("IX_BookCharacters_BookId");
            });

            // Index on Title to aid demo queries
            entity.HasIndex(b => b.Title).HasDatabaseName("IX_Books_Title");
        });

        modelBuilder.Entity<Author>(entity => {
            entity.ToTable("Authors");

            entity.HasKey(a => a.Id);

            entity.Property(a => a.Name)
            .HasMaxLength(150)
            .IsRequired();

            // Index on Name for demo lookups
            entity.HasIndex(a => a.Name).HasDatabaseName("IX_Authors_Name");
        });

        modelBuilder.Entity<Character>(entity => {
            entity.ToTable("Characters");

            entity.HasKey(c => c.Id);

            entity.Property(c => c.Name)
            .HasMaxLength(100)
            .IsRequired();

            // Index on Name for demo
            entity.HasIndex(c => c.Name).HasDatabaseName("IX_Characters_Name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
