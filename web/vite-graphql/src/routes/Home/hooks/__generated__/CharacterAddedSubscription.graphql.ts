/**
 * @generated SignedSource<<abd0c461cc291fb9958bec2ae6a7970b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CharacterAddedSubscription$variables = {
  bookId: string;
};
export type CharacterAddedSubscription$data = {
  readonly onCharacterAdded: {
    readonly " $fragmentSpreads": FragmentRefs<"BookDetails_book">;
  } | null | undefined;
};
export type CharacterAddedSubscription = {
  response: CharacterAddedSubscription$data;
  variables: CharacterAddedSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "bookId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "bookId",
    "variableName": "bookId"
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
    "name": "CharacterAddedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "onCharacterAdded",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BookDetails_book"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CharacterAddedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "onCharacterAdded",
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
    ]
  },
  "params": {
    "cacheID": "1ce3f6dc00ddf1ac4a8838ce272be4d5",
    "id": null,
    "metadata": {},
    "name": "CharacterAddedSubscription",
    "operationKind": "subscription",
    "text": "subscription CharacterAddedSubscription(\n  $bookId: ID!\n) {\n  onCharacterAdded(bookId: $bookId) {\n    ...BookDetails_book\n    id\n  }\n}\n\nfragment BookDetails_book on Book {\n  id\n  title\n  characters(first: 5) {\n    edges {\n      cursor\n      node {\n        name\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e2bc965b45c84d756c2a2ac8844a7bc5";

export default node;
