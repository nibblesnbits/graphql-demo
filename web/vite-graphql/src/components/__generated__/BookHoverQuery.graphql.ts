/**
 * @generated SignedSource<<0d084fcb0549e4854c960150f9984374>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookHoverQuery$variables = {
  id: string;
};
export type BookHoverQuery$data = {
  readonly book: {
    readonly id: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"Book_item">;
  };
};
export type BookHoverQuery = {
  response: BookHoverQuery$data;
  variables: BookHoverQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookHoverQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "book",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Book_item"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookHoverQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "book",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Author",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "09218fd4bf9a63458aa5bec05eef3d30",
    "id": null,
    "metadata": {},
    "name": "BookHoverQuery",
    "operationKind": "query",
    "text": "query BookHoverQuery(\n  $id: ID!\n) {\n  book(id: $id) {\n    id\n    title\n    ...Book_item\n  }\n}\n\nfragment Book_item on Book {\n  id\n  title\n  author {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "c5de1a5f66fa95bb8a8fc1d0bdf16329";

export default node;
