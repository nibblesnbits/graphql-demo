/**
 * @generated SignedSource<<e96528843aefb21e87c806cf70465c02>>
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
export type Admin_AddBookMutation$variables = {
  AddBookInput: AddBookInput;
};
export type Admin_AddBookMutation$data = {
  readonly addBook: {
    readonly __typename: "AddBookPayload";
  };
};
export type Admin_AddBookMutation = {
  response: Admin_AddBookMutation$data;
  variables: Admin_AddBookMutation$variables;
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
    "name": "Admin_AddBookMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Admin_AddBookMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5be4352f0d655189a1d48bfc4020e654",
    "id": null,
    "metadata": {},
    "name": "Admin_AddBookMutation",
    "operationKind": "mutation",
    "text": "mutation Admin_AddBookMutation(\n  $AddBookInput: AddBookInput!\n) {\n  addBook(input: $AddBookInput) {\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "a5344490a2ed4886fc285b36cd42e86e";

export default node;
