/**
 * @generated SignedSource<<f60c638bdc5c0b04b3fd04c1f2395802>>
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
export type BookFormPage_AddBookMutation$variables = {
  addBookInput: AddBookInput;
};
export type BookFormPage_AddBookMutation$data = {
  readonly addBook: {
    readonly book: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"BookDetails_book">;
    } | null | undefined;
  };
};
export type BookFormPage_AddBookMutation = {
  response: BookFormPage_AddBookMutation$data;
  variables: BookFormPage_AddBookMutation$variables;
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
    "name": "BookFormPage_AddBookMutation",
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
    "name": "BookFormPage_AddBookMutation",
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
    "cacheID": "17e3d8294d113363fcae7beddec38441",
    "id": null,
    "metadata": {},
    "name": "BookFormPage_AddBookMutation",
    "operationKind": "mutation",
    "text": "mutation BookFormPage_AddBookMutation(\n  $addBookInput: AddBookInput!\n) {\n  addBook(input: $addBookInput) {\n    book {\n      id\n      ...BookDetails_book\n    }\n  }\n}\n\nfragment BookDetails_book on Book {\n  id\n  title\n  characters(first: 5) {\n    edges {\n      cursor\n      node {\n        name\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "34cd0542246523a268306d5151f92bc3";

export default node;
