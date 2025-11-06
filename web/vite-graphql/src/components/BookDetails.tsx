import { graphql, usePaginationFragment } from "react-relay";
import type { BookDetails_book$key } from "./__generated__/BookDetails_book.graphql";

export default function BookDetails(props: { book: BookDetails_book$key }) {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment BookDetails_book on Book
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 5 }
      )
      @refetchable(queryName: "BookDetails_book_paginationQuery") {
        id
        title
        characters(after: $cursor, first: $count)
          @connection(key: "BookDetails_book_characters") {
          edges {
            cursor
            node {
              name
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
    props.book
  );

  if (!data.characters?.edges?.length) {
    return <div>No characters found for this book.</div>;
  }

  return (
    <>
      <h2>{data.title}</h2>
      <table>
        <thead>
          <tr>
            <th>
              <em>Characters</em>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.characters?.edges?.map((edge, index) =>
            edge?.node ? (
              <tr key={index}>
                <td>{edge.node.name}</td>
              </tr>
            ) : null
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>
              {hasNext ? (
                <button
                  onClick={() => {
                    loadNext(5);
                  }}
                >
                  Load more characters
                </button>
              ) : (
                "No more characters."
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
