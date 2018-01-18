import { Environment } from 'relay-runtime';
import { Network } from 'relay-local-schema';

import schema from './schema';

const environment = new Environment({
  network: Network.create({ schema }),
});

export default environment;