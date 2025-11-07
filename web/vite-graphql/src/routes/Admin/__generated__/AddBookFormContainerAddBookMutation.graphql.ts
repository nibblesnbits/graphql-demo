/**
 * @generated SignedSource<<94d884bb3cd7ebced8e0d883fd76d9e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AddBookInput = {
  input: BookInput;
};
export type BookInput = {
  title: string;
};
export type AddBookFormContainerAddBookMutation$variables = {
  AddBookInput: AddBookInput;
};
export type AddBookFormContainerAddBookMutation$data = {
  readonly addBook: {
    readonly __typename: "AddBookPayload";
  };
};
export type AddBookFormContainerAddBookMutation = {
  response: AddBookFormContainerAddBookMutation$data;
  variables: AddBookFormContainerAddBookMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "AddBookInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "AddBookInput"
      }
    ],
    "concreteType": "AddBookPayload",
    "kind": "LinkedField",
    "name": "addBook",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddBookFormContainerAddBookMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddBookFormContainerAddBookMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "038c82589cf3fab3bc5f977e2803d0b2",
    "id": null,
    "metadata": {},
    "name": "AddBookFormContainerAddBookMutation",
    "operationKind": "mutation",
    "text": "mutation AddBookFormContainerAddBookMutation(\n  $AddBookInput: AddBookInput!\n) {\n  addBook(input: $AddBookInput) {\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "d1324a9dc83527f6be59ccfede32f17d";

export default node;
