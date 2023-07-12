<template>
  <div id="app">
    <h1>TEST App</h1>
    
    <p>{{ this.id }}</p>
    <input type="text" v-model="answer" placeholder="answer context" />
    <button v-on:click="createForm()">Create Answer</button>
  </div>
</template>

<script>
  // import * as Query from './graphql/querys';
  // import * as Subscription from './graphql/subscriptions';
  import input from './scripts/set-input';
  import { Amplify } from 'aws-amplify';
  import { questions, initInput } from './scripts/init-input';

  // Initialize a Input (Question field and ID field)
  initInput();

  // Update a answer field of the Input
  // console.log(input)
  


  export default input;

</script>

<!-- <script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { API, Amplify, DataStore } from "aws-amplify";
import amplifyConfig from "./aws-exports";
import { createInput } from './graphql/mutations';

Amplify.configure(amplifyConfig);

export default {
  data : function() {
        return {
            question: '',
            answer: ''
        };
    },
  methods: {
    async createForm() {
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

// export default {
//   data : function() {
//         return {
//             question: '',
//             answer: ''
//         };
//     },
//   methods: {
//     async createForm() {
//       // await API.graphql(graphqlOperation(createInput, {input: { id: this.id, question: this.question, answer: this.answer } }));
//       try {
//           const newInput = await API.graphql({
//           query: createInput,
//           variables: { input: {
//             "question": "question test1",
//             "answer": this.answer
//             }
//           }
//         });
//         console.log('Input data created successfully!', newInput);
//       } catch (error) {
//         console.log('Error saving creating input data', error);
//       }
//       }
//     }
//   }
</script> -->