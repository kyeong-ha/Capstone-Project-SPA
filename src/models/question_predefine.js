import { DataStore } from 'aws-amplify';
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';
const { Input } = initSchema(schema);


async function createOrUpdateQuestion(init_id, init_question) {
    try{
        const input = await DataStore.save(
            new Input({
                id: init_id.toString(),
                qId: init_id,
                question: init_question,
                answer: ''
            })
        );
        console.log('success', input);
    } catch(error) {
        console.log(error);
    }
}

export {createOrUpdateQuestion};
