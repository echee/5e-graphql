import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';

import ClassType from './ClassType';

const BASE_URL = 'http://dnd5eapi.co/api';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchClasses() {
  console.log('fetch classes')
  return fetchResponseByURL('/classes/').then(json => json.results);
}

function fetchClassByURL(relativeURL) {
  return fetchResponseByURL(relativeURL).then(json => json.results);
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
        id: { type: GraphQLString },
      },
      resolve: (root, args) => fetchClassByURL(`/classes/${ args.id }/`),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});