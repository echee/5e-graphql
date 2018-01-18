import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const LanguageType = new GraphQLObjectType({
  name: 'LanguageType',
  description: 'Your race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice.',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The language id'
    },
    name: {
      type: GraphQLString,
      description: 'The language name'
    }
  })
});

export default LanguageType;