import { type RelayRoute } from "@/Router/withRelay";
import type { HomeQuery } from "./__generated__/HomeQuery.graphql";
import Book from "@/components/Book";
import BookHover from "@/components/BookHover";
import { Suspense, useState } from "react";
import CreateBookForm, {
  type CreateBookFormInputs,
} from "../../components/CreateBookForm";
import { useMutation } from "react-relay";
// import { useLocation } from "wouter";
import { graphql } from "relay-runtime";
import type {
  Home_AddBookMutation,
  Home_AddBookMutation$variables,
} from "./__generated__/Home_AddBookMutation.graphql";
import { useBookAddedSubscription } from "./hooks/BookAdded";
import type { BookAddedSubscription$data } from "./hooks/__generated__/BookAddedSubscription.graphql";
import BookDetails from "@/components/BookDetails";

export default function HomePage({ data }: Readonly<RelayRoute<HomeQuery>>) {
  const books = data?.books?.filter((book) => book != null);

  const [clickedBook, setClickedBook] = useState<{ id: string } | null>(null);

  // const [, navTo] = useLocation();
  const [addBookErrors, setAddBookErrors] = useState<Error[]>([]);
  const [lastAddedBook, setLastAddedBook] =
    useState<BookAddedSubscription$data>();
  const [addBookMutation] = useMutation<Home_AddBookMutation>(
    graphql`
      mutation Home_AddBookMutation($addBookInput: AddBookInput!) {
        addBook(input: $addBookInput) {
          book {
            id
            ...BookDetails_book
          }
        }
      }
    `
  );

  const addBook = (
    addBookInput: Home_AddBookMutation$variables["addBookInput"]
  ) => {
    addBookMutation({
      variables: {
        addBookInput,
      },
      onError(error) {
        setAddBookErrors([error]);
      },
      onCompleted({ addBook }) {
        if (addBook?.book?.id) {
          // navTo(`/book/${encodeURIComponent(addBook.book.id)}`, {
          //   replace: true,
          // });
        }
      },
    });
  };
  const handleSubmitForm = (data: CreateBookFormInputs) => {
    addBook({
      input: {
        ...data,
      },
    });
  };

  const showInfo = (id: string) => () => {
    setClickedBook({ id });
  };

  useBookAddedSubscription(
    (error) => {
      console.error("Error in BookAdded subscription:", error);
    },
    (response) => {
      console.log("New book added via subscription:", response);
      setLastAddedBook(response);
    }
  );

  return (
    <div>
      <h1>Star Wars Books</h1>
      {books?.map((book) => (
        <li key={book.id}>
          <Book book={book} />
          <button onClick={showInfo(book.id)}>Check me</button>
        </li>
      ))}
      <div>
        {clickedBook && (
          <Suspense fallback="Loading...">
            <BookHover id={clickedBook.id} />
          </Suspense>
        )}
      </div>
      <div>
        <h1>Create a New Book</h1>
        <CreateBookForm onSubmitForm={handleSubmitForm} />
        {addBookErrors.length > 0 && (
          <div>
            <h2>Errors:</h2>
            <ul>
              {addBookErrors.map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <h2>Added Book:</h2>
        {lastAddedBook && <BookDetails book={lastAddedBook.onBookAdded} />}
      </div>
    </div>
  );
}
