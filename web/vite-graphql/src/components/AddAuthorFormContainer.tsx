import { useState } from "react";
import CreateAuthorForm, {
  type CreateAuthorFormInputs,
} from "./CreateAuthorForm";
import { useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import type {
  AddAuthorFormContainer_AddAuthorMutation,
  AddAuthorFormContainer_AddAuthorMutation$variables,
} from "./__generated__/AddAuthorFormContainer_AddAuthorMutation.graphql";

export default function AddAuthorFormContainer() {
  const handleSubmitForm = (data: CreateAuthorFormInputs) => {
    addAuthor({
      input: {
        ...data,
      },
    });
  };

  const [addAuthorErrors, setAddAuthorErrors] = useState<Error[]>([]);
  const [addAuthorMutation] =
    useMutation<AddAuthorFormContainer_AddAuthorMutation>(graphql`
      mutation AddAuthorFormContainer_AddAuthorMutation(
        $addAuthorInput: AddAuthorInput!
      ) {
        addAuthor(input: $addAuthorInput) {
          author {
            id
            name
          }
        }
      }
    `);

  const addAuthor = (
    addAuthorInput: AddAuthorFormContainer_AddAuthorMutation$variables["addAuthorInput"]
  ) => {
    addAuthorMutation({
      variables: { addAuthorInput },
      onError(error) {
        setAddAuthorErrors([error]);
      },
      onCompleted({ addAuthor: { author } }) {
        console.log("Author created with ID:", author?.id);
      },
    });
  };

  return (
    <div>
      <h1>Create a New Author</h1>
      <CreateAuthorForm onSubmitForm={handleSubmitForm} />
      {addAuthorErrors.length > 0 && (
        <div>
          <h2>Errors:</h2>
          <ul>
            {addAuthorErrors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
