import { useState } from "react";
import CreateBookForm, { type CreateBookFormInputs } from "./CreateBookForm";
import { useMutation, useRelayEnvironment } from "react-relay";
import { fetchQuery, graphql } from "relay-runtime";
import type {
  AddBookFormContainer_AddBookMutation,
  AddBookFormContainer_AddBookMutation$variables,
} from "./__generated__/AddBookFormContainer_AddBookMutation.graphql";
import { AuthorsQueryDef } from "@/queries/AuthorSearchQuery";
import type { AuthorSearchQuery } from "@/queries/__generated__/AuthorSearchQuery.graphql";

export default function AddBookFormContainer({
  authorId,
  onCompleted,
}: {
  authorId?: string;
  onCompleted?: (book: { id: string }) => void;
}) {
  const relayEnvironment = useRelayEnvironment();

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
      onCompleted({ addBook: { book } }) {
        if (book?.id) {
          onCompleted?.(book);
        }
      },
    });
  };

  const searchAuthor = (term: string) => {
    return new Promise<{ id: string; name: string }[]>((res, rej) => {
      fetchQuery<AuthorSearchQuery>(relayEnvironment, AuthorsQueryDef, {
        search: term,
      }).subscribe({
        next: (data) => {
          res(
            data.searchAuthors.map((author) => ({
              id: author.id,
              name: author.name,
            }))
          );
        },
        error: (err: Error) => rej(err),
      });
    });
  };

  return (
    <div>
      <h1>Create a New Book</h1>
      <CreateBookForm
        onSubmitForm={handleSubmitForm}
        search={searchAuthor}
        authorId={authorId}
      />
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
