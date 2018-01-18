import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const ClassType = new GraphQLObjectType({
  name: 'Class',
  description: 'Dnd 5e class',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
});

export default ClassType;