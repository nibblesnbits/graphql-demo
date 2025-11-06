import { graphql } from "relay-runtime";

export const BookQueryDef = graphql`
  query BookQuery($id: ID!) {
    node(id: $id) {
      id
      ... on Book {
        title
        ...BookDetails_book
      }
    }
  }
`;
