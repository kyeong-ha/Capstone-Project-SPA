import { API } from 'aws-amplify';
import { createOrUpdateMBTI } from '../../graphql/mutations';

export const MBTI = {
    data() {
        return {
            mbti: 'INFJ',
            type: '',
            mind: ''
        }
    },
    methods: { 
        async createMBTI(){
            console.log(MBTI)
            await API.graphql({
                query: createOrUpdateMBTI,
                variables: { 
                    input: {
                        mbti: MBTI.data.mbti,
                        type: MBTI.data.type,
                        mind: MBTI.data.mind
                    }
                }
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log('Error creating MBTI data', error);
            });
        }
    }
}