import { API } from 'aws-amplify';
import { createOrUpdateInput } from '../graphql/mutations';

export default {
    data() {
        return {
            id: '',
            question: '',
            answer: ''
        };
    },
    async create(){
        await API.graphql({
            query: createOrUpdateInput,
            variables: { 
                input: {
                    id: `${this.id}`,
                    question: this.question,
                    answer: this.answer
                }
            }
        }).then((res) => {
            console.log('new Input: ', res);
            // this.id = res.id;
            // this.question = res.question;
            // this.answer = res.answer;
            }
        ).catch((err) => console.error(err));
    }
}