import { API } from 'aws-amplify';
import { createOrUpdateInput } from '../graphql/mutations';
import { questions } from './init-input';

export default {
    data() {
        return {
            id: 0,
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
            // console.log('new Input: ', res);
            this.id = Number(res.data.createOrUpdateInput.id)+1;
            this.question = questions[this.id];
            this.answer = '';
            // console.log('next Input: ', this.id, this.question, this.answer);
        }).catch((err) => console.error(err));
    }
}