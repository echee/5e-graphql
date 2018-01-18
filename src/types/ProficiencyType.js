import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import ClassType from './ClassType';
import RaceType from './RaceType';

const ProficiencyType = new GraphQLObjectType({
  name: 'Proficiency',
  description: 'The class you pick provides you with different proficiencies',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The proficiency id'
    },
    name: {
      type: GraphQLString,
      description: 'The proficiency name'
    },
    classes: {
      type: new GraphQLList(ClassType),
      description: 'List of classes that provide this proficiency'
    },
    // races: {
    //   type: new GraphQLList(RaceType),
    //   description: 'List of races that provide this proficiency'
    // }
  })
});

export default ProficiencyType;