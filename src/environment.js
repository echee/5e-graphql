import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import { createFetch } from 'relay-local-schema';

import schema from './schema';

/** 
 * This will execute queries against the specified schema locally, 
 * rather than against a separate GraphQL server.
*/

const environment = new Environment({
  network: Network.create(createFetch({ schema })),
  store: new Store(new RecordSource()),
});

export default environment;