import { useState } from "react";
import CreateBookForm, { type CreateBookFormInputs } from "./CreateBookForm";
import { useMutation } from "react-relay";
import { useLocation } from "wouter";
import { graphql } from "relay-runtime";
import type {
  AddBookFormContainer_AddBookMutation,
  AddBookFormContainer_AddBookMutation$variables,
} from "./__generated__/AddBookFormContainer_AddBookMutation.graphql";

export default function AddBookFormContainer() {
  const [, navTo] = useLocation();

  const handleSubmitForm = (data: CreateBookFormInputs) => {
    addBook({
      input: {
        ...data,
      },
    });
  };

  const [addBookErrors, setAddBookErrors] = useState<Error[]>([]);
  const [addBookMutation] = useMutation<AddBookFormContainer_AddBookMutation>(
    graphql`
      mutation AddBookFormContainer_AddBookMutation(
        $addBookInput: AddBookInput!
      ) {
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
    addBookInput: AddBookFormContainer_AddBookMutation$variables["addBookInput"]
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
