/**
 * @generated SignedSource<<794264be3d228604341977b6e6f68db6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Book_item$data = {
  readonly author: {
    readonly name: string;
  };
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "Book_item";
};
export type Book_item$key = {
  readonly " $data"?: Book_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"Book_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Book_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
  "type": "Book",
  "abstractKey": null
};

(node as any).hash = "2bbee8d81f4682bda3f5e2a8c3035cf6";

export default node;
