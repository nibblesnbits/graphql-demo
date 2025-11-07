/**
 * @generated SignedSource<<382253e5149ae7e35aea657ab2bf7a5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorDetails_author$data = {
  readonly books: ReadonlyArray<{
    readonly id: string;
    readonly title: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"BookDetails_book">;
  }>;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "AuthorDetails_author";
};
export type AuthorDetails_author$key = {
  readonly " $data"?: AuthorDetails_author$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuthorDetails_author">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthorDetails_author",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BookDetails_book"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Author",
  "abstractKey": null
};
})();

(node as any).hash = "86d35630aa8a73c9b9d67c8895b51ed9";

export default node;
