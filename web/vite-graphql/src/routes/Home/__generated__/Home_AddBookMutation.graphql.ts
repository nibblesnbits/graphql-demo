/**
 * @generated SignedSource<<5c1f4371a45dde5a7223d7519da74e9f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddBookInput = {
  input: BookInput;
};
export type BookInput = {
  title: string;
};
export type Home_AddBookMutation$variables = {
  addBookInput: AddBookInput;
};
export type Home_AddBookMutation$data = {
  readonly addBook: {
    readonly book: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"BookDetails_book">;
    } | null | undefined;
  };
};
export type Home_AddBookMutation = {
  response: Home_AddBookMutation$data;
  variables: Home_AddBookMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "addBookInput"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "addBookInput"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Home_AddBookMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddBookPayload",
        "kind": "LinkedField",
        "name": "addBook",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Book",
            "kind": "LinkedField",
            "name": "book",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BookDetails_book"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Home_AddBookMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddBookPayload",
        "kind": "LinkedField",
        "name": "addBook",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Book",
            "kind": "LinkedField",
            "name": "book",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "CharactersConnection",
                "kind": "LinkedField",
                "name": "characters",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CharactersEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Character",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v2/*: any*/),
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
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "characters(first:5)"
              },
              {
                "alias": null,
                "args": (v3/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "BookDetails_book_characters",
                "kind": "LinkedHandle",
                "name": "characters"
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
    "cacheID": "1dd208b11c5587bbb838725e2a2773fe",
    "id": null,
    "metadata": {},
    "name": "Home_AddBookMutation",
    "operationKind": "mutation",
    "text": "mutation Home_AddBookMutation(\n  $addBookInput: AddBookInput!\n) {\n  addBook(input: $addBookInput) {\n    book {\n      id\n      ...BookDetails_book\n    }\n  }\n}\n\nfragment BookDetails_book on Book {\n  id\n  title\n  characters(first: 5) {\n    edges {\n      cursor\n      node {\n        name\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e4864202e1e9cec1c2e83b44e3a40716";

export default node;
