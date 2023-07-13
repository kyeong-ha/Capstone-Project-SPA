import { API } from 'aws-amplify';
import { createOrUpdateMBTI } from '../../graphql/mutations';

export const MBTI = {
    data() {
        return {
            'id': 0,
            'mbti': '',
            'type': '',
            'mind': ''
        }
    },
    methods: { 
        async createMBTI(){
            await API.graphql({
                query: createOrUpdateMBTI,
                variables: { 
                    input: {
                        id: `${MBTI.data().mbtiId}`,
                        mbti: MBTI.data().mbti,
                        type: MBTI.data().type,
                        mind: MBTI.data().mind
                    }
                }
            }).catch(error => {
                console.log('Error creating MBTI data', error);
            });
        }
    }
}