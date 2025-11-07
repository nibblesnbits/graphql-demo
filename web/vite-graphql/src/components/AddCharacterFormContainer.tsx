import { useState } from "react";
import CreateCharacterForm, {
  type CreateCharacterFormInputs,
} from "./CreateCharacterForm";
import { useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import type {
  AddCharacterFormContainer_AddCharacterMutation,
  AddCharacterFormContainer_AddCharacterMutation$variables,
} from "./__generated__/AddCharacterFormContainer_AddCharacterMutation.graphql";

export default function AddCharacterFormContainer({
  bookId,
  onCompleted,
}: {
  bookId: string;
  onCompleted?: (character: { id: string }) => void;
}) {
  const handleSubmitForm = (data: CreateCharacterFormInputs) => {
    addCharacter({
      input: {
        ...data,
      },
    });
  };

  const [addCharacterErrors, setAddCharacterErrors] = useState<Error[]>([]);
  const [addCharacterMutation] =
    useMutation<AddCharacterFormContainer_AddCharacterMutation>(
      graphql`
        mutation AddCharacterFormContainer_AddCharacterMutation(
          $addCharacterInput: AddCharacterInput!
        ) {
          addCharacter(input: $addCharacterInput) {
            character {
              id
              ...CharacterDetails_character
            }
          }
        }
      `
    );

  const addCharacter = (
    addCharacterInput: AddCharacterFormContainer_AddCharacterMutation$variables["addCharacterInput"]
  ) => {
    addCharacterMutation({
      variables: {
        addCharacterInput: {
          input: {
            name: addCharacterInput.input.name,
            bookId,
          },
        },
      },
      onError(error) {
        setAddCharacterErrors([error]);
      },
      onCompleted({ addCharacter: { character } }) {
        if (character?.id) {
          onCompleted?.(character);
        }
      },
    });
  };

  return (
    <div>
      <h1>Create a New Character</h1>
      <CreateCharacterForm onSubmitForm={handleSubmitForm} />
      {addCharacterErrors.length > 0 && (
        <div>
          <h2>Errors:</h2>
          <ul>
            {addCharacterErrors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
