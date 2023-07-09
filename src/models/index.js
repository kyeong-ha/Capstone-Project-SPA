// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MBTI, Input, MbtiForm, InputForm } = initSchema(schema);

export {
  MBTI,
  Input,
  MbtiForm,
  InputForm
};