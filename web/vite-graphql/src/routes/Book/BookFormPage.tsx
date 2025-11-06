import { useState } from "react";
import CreateBookForm, {
  type CreateBookFormInputs,
} from "../../components/CreateBookForm";
import { useMutation } from "react-relay";
import { useLocation } from "wouter";
import { graphql } from "relay-runtime";
import type {
  BookFormPage_AddBookMutation,
  BookFormPage_AddBookMutation$variables,
} from "./__generated__/BookFormPage_AddBookMutation.graphql";

export default function BookFormPage() {
  const [, navTo] = useLocation();
  const handleSubmitForm = (data: CreateBookFormInputs) => {
    console.log("Form submitted with data:", data);
  };
  const [addBookErrors, setAddBookErrors] = useState<Error[]>([]);
  const [addBookMutation] = useMutation<BookFormPage_AddBookMutation>(
    graphql`
      mutation BookFormPage_AddBookMutation($addBookInput: AddBookInput!) {
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
    createBookInput: BookFormPage_AddBookMutation$variables["createBookInput"]
  ) => {
    addBookMutation({
      variables: {
        createBookInput,
      },
      onError(error) {
        setAddBookErrors([error]);
      },
      onCompleted({ addBook }) {
        if (addBook?.book?.id) {
          navTo(`/book/${encodeURIComponent(addBook.book.id)}`, {
            replace: true,
          });
        }
      },
    });
  };

  return (
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
  );
}
