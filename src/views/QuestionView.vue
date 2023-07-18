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
import { mapMutations, mapGetters } from 'vuex';
import { getMbtiElements } from '../graphql/queries';

/* eslint-disable */
export default {
    name: 'question',
    computed: {
            ...mapGetters(['mbti', 'ei', 'ns', 'tf', 'pj'])
    },
    data: function() {
        return {
            id: 0,
            question: 'At a party, would you rather spend most of the tim…ose friends or mingle with many different people?',
            answer: ''
        };
    },
    methods: {
        ...mapMutations({
            updateVal: "UPDATE_VAL",
        }),
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
                    this.id = Number(res.data.createOrUpdateInput.id)+1;
                    this.question = questions[this.id];
                    this.answer = '';
                }).catch((err) => console.error(err));
            }
            else {
                axios.get(' https://yg1l81qm3i.execute-api.ap-northeast-2.amazonaws.com/classifier/proxy', {})
                .then((res) => {
                    const params = { mbti: res.data.mbti, ei: res.data.EI , ns: res.data.NS, tf: res.data.TF, pj: res.data.PJ };
                    
                    API.graphql({ query: getMbtiElements, variables: { mbti: res.data.mbti } })
                    .then((res_) => {
                        params.type = res_.data.getMbtiElements.type;
                        params.mind = res_.data.getMbtiElements.mind;
                        this.updateVal(params);
                        this.$router.push({ name: 'result' });
                    });
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
}
</script>