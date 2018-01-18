/**
 * @flow
 * @relayHash 69f1f473f092a8daf5599a9fe5b9184e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ClassQueryResponse = {|
  +classes: $ReadOnlyArray<?{|
    +name: string;
  |}>;
|};
*/


/*
query ClassQuery {
  classes {
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClassQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Class",
        "name": "classes",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ClassQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ClassQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Class",
        "name": "classes",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ClassQuery {\n  classes {\n    name\n  }\n}\n"
};

module.exports = batch;
