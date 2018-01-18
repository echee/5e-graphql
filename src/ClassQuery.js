import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import { createFetch } from 'relay-local-schema';

import schema from './schema';

const environment = new Environment({
  network: Network.create(createFetch({ schema })),
  store: new Store(new RecordSource()),  
});

class ClassQuery extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ClassQuery {
            classes {
              name
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <ul>
              {props.classes.map((dndclass, index) => {
                return <li key={index}>{dndclass.name}</li>
              })}
            </ul>
          )
        }}
      />
    );
  }
};

export default ClassQuery;