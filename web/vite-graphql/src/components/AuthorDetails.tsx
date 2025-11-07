import { useFragment } from "react-relay";
import AuthorDetailsFragment from "@/fragments/AuthorDetails";
import type { AuthorDetails_author$key } from "./__generated__/AuthorDetails_author.graphql";

export default function AuthorDetails(props: {
  author: AuthorDetails_author$key;
}) {
  const data = useFragment(AuthorDetailsFragment, props.author);

  return (
    <>
      <h2>{data.name}</h2>
      <table>
        <thead>
          <tr>
            <th>
              <em>Books</em>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.books.map((book) =>
            book ? (
              <tr key={book.id}>
                <td>
                  <a href={`/books/${encodeURIComponent(book.id)}`}>
                    {book.title}
                  </a>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </>
  );
}
