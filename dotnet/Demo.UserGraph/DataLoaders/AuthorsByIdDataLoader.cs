using Demo.Data.Books;
using Demo.Data.Books.Models;
using Microsoft.EntityFrameworkCore;

namespace Demo.UserGraph.DataLoaders;


internal static class AuthorsDataLoader {

    [DataLoader]
    public static async Task<Dictionary<Guid, Author[]>> GetAuthorsByIdsAsync(
        IReadOnlyList<Guid> keys,
        IDbContextFactory<BooksDbContext> dbContextFactory,
        CancellationToken cancellationToken) {

        await using var db = await dbContextFactory.CreateDbContextAsync(cancellationToken);
        var authors = await db.Authors
            .AsNoTracking()
            .Where(a => keys.Contains(a.Id))
            .ToListAsync(cancellationToken);
        // Group by Id to return array (to match DataLoader signature)
        var authorDict = new Dictionary<Guid, Author[]>();
        foreach (var key in keys) {
            var matchedAuthors = authors.Where(a => a.Id == key).ToArray();
            authorDict[key] = matchedAuthors;
        }
        return authorDict;
    }
}
