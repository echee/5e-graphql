import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from './environment';

const PageClassQuery = graphql`
  query PageClassQuery(
    $classID: ID!
  ) {
    class(id: $classID) {
      name
      hit_die
      subclasses{
        name
        description
      }
    }
  }
`;

class PageClass extends React.Component {
  render() {
    const { slug } = this.props;
    console.log(this.props)
    return (
      <QueryRenderer
        environment={environment}
        query={PageClassQuery}
        // populate this via url
        variables={{ classID: slug }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!{error}</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <ul>
              <li><strong>Class Name: </strong>{props.class.name}</li>
              <li><strong>Hit Die: </strong>{props.class.hit_die}</li>
              {props.class.subclasses.map((subclass, index) => {
                return (
                  <li key={`subclass-${index}`}>
                    <strong>Subclass: </strong>{subclass.name}
                    <p>{subclass.description}</p>
                  </li>
                )
              })}
            </ul>
          )
        }}
      />
    );
  }
};

export default PageClass;