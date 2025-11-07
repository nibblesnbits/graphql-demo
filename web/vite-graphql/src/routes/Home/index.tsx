import { type RelayRoute } from "@/Router/withRelay";
import type { HomeQuery } from "./__generated__/HomeQuery.graphql";
import BookHover from "@/components/BookHover";
import { Suspense, useState } from "react";
import BookDetails from "@/components/BookDetails";

export default function HomePage({ data }: Readonly<RelayRoute<HomeQuery>>) {
  const books = data?.books?.filter((book) => book != null);

  const [clickedBook, setClickedBook] = useState<{ id: string } | null>(null);

  const showInfo = (id: string) => () => {
    setClickedBook({ id });
  };

  return (
    <div>
      <h1>Bookstore</h1>
      <ul>
        {books?.map((book) => (
          <li key={book.id}>
            <BookDetails book={book} />
            <button onClick={showInfo(book.id)}>Check me</button>
          </li>
        ))}
      </ul>
      <div>
        {clickedBook && (
          <Suspense fallback="Loading...">
            <BookHover id={clickedBook.id} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
