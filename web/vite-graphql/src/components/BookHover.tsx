import { graphql, useLazyLoadQuery } from "react-relay";
import type { BookHoverQuery } from "../routes/Book/__generated__/BookHoverQuery.graphql";
import Book from "@/components/Book";

export const BookHoverQueryDef = graphql`
  query BookHoverQuery($id: ID!) {
    book(id: $id) {
      id
      title
      ...Book_item
    }
  }
`;

type BookHoverProps = Readonly<{ id: string }>;

export default function BookHover({ id }: BookHoverProps) {
  const data = useLazyLoadQuery<BookHoverQuery>(BookHoverQueryDef, { id });
  return (
    <div>
      <h1>{data.book?.title}</h1>
      {data.book && <Book book={data.book} />}
    </div>
  );
}
