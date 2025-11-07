import { graphql } from "relay-runtime";

export const BooksQueryDef = graphql`
  query BooksQuery {
    books {
      id
      ...BookDetails_book
    }
  }
`;
