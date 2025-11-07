import { graphql } from "relay-runtime";

export const AuthorsQueryDef = graphql`
  query AuthorsQuery {
    searchAuthors {
      id
      ...AuthorDetails_author
    }
  }
`;
