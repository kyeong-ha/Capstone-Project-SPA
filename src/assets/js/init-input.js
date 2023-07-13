import { API } from 'aws-amplify';
import { createOrUpdateInput } from '../../graphql/mutations';

export const Input = {
    data() {
        return {
            id: 0,
            question: '',
            answer: ''
        }
    },
    methods: { 
        async createInput(){
            await API.graphql({
                query: createOrUpdateInput,
                variables: { 
                    input: {
                        id: `${Input.data.id}`,
                        question: Input.data.question,
                        answer: ''
                    }
                }
            }).catch(error => {
                console.log('Error creating input data', error);
            });
        }
    }
}