// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MBTI, Input } = initSchema(schema);

export {
  MBTI,
  Input
};