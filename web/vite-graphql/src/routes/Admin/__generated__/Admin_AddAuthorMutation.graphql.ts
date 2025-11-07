/**
 * @generated SignedSource<<9feae36d9b3b17fd7ef30084781fcc82>>
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
export type Admin_AddAuthorMutation$variables = {
  AddAuthorInput: AddAuthorInput;
};
export type Admin_AddAuthorMutation$data = {
  readonly addAuthor: {
    readonly __typename: "AddAuthorPayload";
  };
};
export type Admin_AddAuthorMutation = {
  response: Admin_AddAuthorMutation$data;
  variables: Admin_AddAuthorMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "AddAuthorInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "AddAuthorInput"
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
    "name": "Admin_AddAuthorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Admin_AddAuthorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eb0f3d7c4407e6ced704bbcfa29b5334",
    "id": null,
    "metadata": {},
    "name": "Admin_AddAuthorMutation",
    "operationKind": "mutation",
    "text": "mutation Admin_AddAuthorMutation(\n  $AddAuthorInput: AddAuthorInput!\n) {\n  addAuthor(input: $AddAuthorInput) {\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "cd961c2ea9327322e704f24e3bfde041";

export default node;
