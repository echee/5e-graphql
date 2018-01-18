import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
} from 'graphql';

import {ClassType} from './types';

const BASE_URL = 'http://dnd5eapi.co/api';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchClasses() {
  return fetchResponseByURL('/classes/').then(json => json.results);
}

// function fetchClassByURL(relativeURL) {
//   return fetchResponseByURL(relativeURL).then(json => json.results);
// }

function fetchClassById(classID) {
  return fetchResponseByURL(`/classes/${classID}`).then(json => json);
}

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all ...queries',
  fields: () => ({
    classes: {
      type: new GraphQLList(ClassType),
      resolve: fetchClasses,
    },
    class: {
      type: ClassType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (root, args) => fetchClassById(args.id),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});