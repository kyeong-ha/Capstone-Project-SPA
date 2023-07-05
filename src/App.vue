<script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { API, Amplify } from "aws-amplify";
import amplifyConfig from "./aws-exports";
import { createInput } from './graphql/mutations';

Amplify.configure(amplifyConfig);

export default {
  data : function() {
        return {
            id: 1,
            question: '',
            answer: ''
        };
    },
  methods: {
    async createForm() {
      // await API.graphql(graphqlOperation(createInput, {input: { id: this.id, question: this.question, answer: this.answer } }));
      try {
          const newInput = await API.graphql({
          query: createInput,
          variables: { input: {
            "question": "question test1",
            "answer": this.answer
            }
          }
        });
        console.log('Input data created successfully!', newInput);
      } catch (error) {
        console.log('Error saving creating input data', error);
      }
      }
    }
  }
</script>

<template>
  <div id="app">
    <h1>TEST App</h1>
    <!-- <input type="text" v-model="id" placeholder="answer num" /> -->
    
    <p>{{ this.question }}</p>
    <input type="text" v-model="answer" placeholder="answer context" />
    <button v-on:click="createForm()">Create Answer</button>
  </div>
</template>