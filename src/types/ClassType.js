import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

// import ProficiencyType from './ProficiencyType';
import SubclassType from './SubclassType';
import fetchSubclass from '../actions/fetchSubclass';



const ClassType = new GraphQLObjectType({
  name: 'ClassType',
  description: 'Dnd 5e class',
  fields: () => ({
    id: {
      type: GraphQLID,
      desciption: 'The class id'
    },
    name: {
      type: GraphQLString,
      description: 'The class name'
    },
    hit_die: {
      type: GraphQLID,
      description: ''
    },
    // classProficiencies: {
    //   type: new GraphQLList(ProficiencyType),
    //   description: 'A list of proficiencies available to this class',
    //   resolve: () => {
    //   }
    // },
    // saving_throws: {
    //   type: new GraphQLList(SavingThrowType),
    //   description: 'A list of saving throws available to this class',
    //   resolve: () => {
    //   }
    // },
    // starting_equipment: {
    //   type: new GraphQLList(EquipmentType),
    //   description: 'A list of equipment this class starts with',
    //   resolve: () => {
    //   }
    // },
    subclasses: {
      type: new GraphQLList(SubclassType),
      description: 'A list of subclasses available to this class',
      resolve: (({ subclasses }) => 
        Promise.all(subclasses.map(({ url }) => {
          const id = url.split('/').pop();
          return fetchSubclass(id);
        }))
      )
    }
  })
});

export default ClassType;