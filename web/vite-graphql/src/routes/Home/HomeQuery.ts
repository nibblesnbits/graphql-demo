import { graphql } from "relay-runtime";


export const HomeQueryDef = graphql`
  query HomeQuery {
    books(count: 10) {
      id
      ...Book_item
    }
  }
`;
