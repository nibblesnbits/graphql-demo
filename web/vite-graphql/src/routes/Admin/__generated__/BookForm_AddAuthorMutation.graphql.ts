/**
 * @generated SignedSource<<a82f26e4ceb0957cb648a3f8be6cac59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AddAuthorInput = {
  input: AuthorInput;
};
export type AuthorInput = {
  name: string;
};
export type BookForm_AddAuthorMutation$variables = {
  addAuthorInput: AddAuthorInput;
};
export type BookForm_AddAuthorMutation$data = {
  readonly addAuthor: {
    readonly __typename: "AddAuthorPayload";
  };
};
export type BookForm_AddAuthorMutation = {
  response: BookForm_AddAuthorMutation$data;
  variables: BookForm_AddAuthorMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "addAuthorInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "addAuthorInput"
      }
    ],
    "concreteType": "AddAuthorPayload",
    "kind": "LinkedField",
    "name": "addAuthor",
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
    "name": "BookForm_AddAuthorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookForm_AddAuthorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5d7acfe8a3be85690ae8b4af99c85685",
    "id": null,
    "metadata": {},
    "name": "BookForm_AddAuthorMutation",
    "operationKind": "mutation",
    "text": "mutation BookForm_AddAuthorMutation(\n  $addAuthorInput: AddAuthorInput!\n) {\n  addAuthor(input: $addAuthorInput) {\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "301ec91ca4cf1599b3efdb2a6b9912e4";

export default node;
