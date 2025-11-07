/**
 * @generated SignedSource<<dcddd5a2217911d2106c58b9f171c96c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CharacterDetails_character$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "CharacterDetails_character";
};
export type CharacterDetails_character$key = {
  readonly " $data"?: CharacterDetails_character$data;
  readonly " $fragmentSpreads": FragmentRefs<"CharacterDetails_character">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CharacterDetails_character",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Character",
  "abstractKey": null
};

(node as any).hash = "2b0c7f317fbcac61d6d940b925b42c41";

export default node;
