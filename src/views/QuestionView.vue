<template>
    <div id="app">
        <h1>TEST App</h1>
        <p>{{ this.id+1 }}. {{ this.question }}</p>
        <input type="text" v-model="answer" @input="context=$event.target.value"/>
        <button @click="createAnswer()">Create Answer</button>
    </div>
</template>

<script>
import { API } from 'aws-amplify';
import { createOrUpdateInput } from '../graphql/mutations';
import { questions } from '../assets/js/md-to-array';
import axios from 'axios';

export default {
    name: 'App',
    data: function() {
        return {
            id: 0,
            question: 'At a party, would you rather spend most of the tim…ose friends or mingle with many different people?',
            answer: ''
        };
    },
    methods: {
        async createAnswer(){
            if(this.id < 9){
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
                    this.id = Number(res.data.createOrUpdateInput.id)+1;
                    this.question = questions[this.id];
                    this.answer = '';
                    // console.log('next Input: ', this.id, this.question, this.answer);
                }).catch((err) => console.error(err));
            }else {
                axios.get(' https://yg1l81qm3i.execute-api.ap-northeast-2.amazonaws.com/classifier/proxy', {})
                .then((res) => {
                    console.log('success!', res)
                    this.$router.push({ name: 'ResultPage', params: { mbti: res.body.mbti, ei: res.body.EI , ns: res.data.NS, tf: res.data.tf, pj: res.data.PJ }});
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
}
</script>