// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CUISINES, FOODS, RESTAURANTS, RESTAURANTSFOODS } = initSchema(schema);

export {
  CUISINES,
  FOODS,
  RESTAURANTS,
  RESTAURANTSFOODS
};