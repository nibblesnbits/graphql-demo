import { graphql, useFragment } from "react-relay";
import type { Book_item$key } from "./__generated__/Book_item.graphql";
import { Link } from "wouter";

export default function BookListItem(props: { book: Book_item$key }) {
  const book = useFragment<Book_item$key>(
    graphql`
      fragment Book_item on Book {
        id
        title
        author {
          name
        }
      }
    `,
    props.book
  );

  return (
    <>
      <b>
        <Link to={`/book/${encodeURIComponent(book.id)}`}>{book.title}</Link>
      </b>
      : written by <i>{book.author.name}</i>
    </>
  );
}
