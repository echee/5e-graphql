import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const SubclassType = new GraphQLObjectType({
  name: 'SubclassType',
  description: 'Dnd 5e class',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The subclass id'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the subclass'
    },
    subclass_flavor: {
      type: GraphQLString,
      description: 'The flavor of the subclass'
    },
    description: {
      type: GraphQLString,
      description: 'The description of the subclass'
    },
    // features: {
    //   type: new GraphQLList(FeatureType),
    //   description: 
    // }
  })
});

export default SubclassType;