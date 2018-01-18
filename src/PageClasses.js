import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from './environment';

const PageClassesQuery = graphql`
  query PageClassesQuery {
    classes {
      id
      name
    }
  }
`;
class PageClasses extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={PageClassesQuery}
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
                return <li key={`class-${index}`}><a href={`/class/${index+1}`}>{dndclass.name}</a></li>
              })}
            </ul>
          )
        }}
      />
    );
  }
};

export default PageClasses;