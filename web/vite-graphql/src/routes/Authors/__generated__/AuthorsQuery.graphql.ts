/**
 * @generated SignedSource<<193b9b7b41def6c46fa53472e0834af8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorsQuery$variables = Record<PropertyKey, never>;
export type AuthorsQuery$data = {
  readonly authors: ReadonlyArray<{
    readonly books: ReadonlyArray<{
      readonly id: string;
      readonly title: string | null | undefined;
    }>;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"AuthorDetails_author">;
  }>;
};
export type AuthorsQuery = {
  response: AuthorsQuery$data;
  variables: AuthorsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "Book",
  "kind": "LinkedField",
  "name": "books",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "authors",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuthorDetails_author"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthorsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "authors",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "75e469bc4c2d587ad7def935d9eac855",
    "id": null,
    "metadata": {},
    "name": "AuthorsQuery",
    "operationKind": "query",
    "text": "query AuthorsQuery {\n  authors {\n    id\n    ...AuthorDetails_author\n    books {\n      id\n      title\n    }\n  }\n}\n\nfragment AuthorDetails_author on Author {\n  id\n  name\n  books {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "31c8f30cbbe4c48fb12beef7e9b6336e";

export default node;
