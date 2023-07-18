<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { Input } from './assets/js/init-input.js';
  import { MBTI } from './assets/js/init-mbti.js';
  import { questions, mbtis } from './assets/js/md-to-array';

  // Initialize a Input (Question field and ID field)
  // questions.forEach((question, id) => {
  //     Input.data.id = `${id}`;
  //     Input.data.question = question;
  //     Input.methods.createInput();
  // });

  // Initialize a MBTI
  // for(let i=0; i<mbtis.length/3; i++){
  //   MBTI.data.id = `${i}`;
  //   MBTI.data.mbti = mbtis[i*3],
  //   MBTI.data.type = mbtis[i*3+1],
  //   MBTI.data.mind = mbtis[i*3+2]
  //   MBTI.methods.createMBTI();
  // }
</script>