<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>MBTI : {{ getMBTI }}</h2>
    <h4>EI : {{ getEI }}</h4>
    <h4>NS : {{ getNS }}</h4>
    <h4>TF : {{ getTF }}</h4>
    <h4>PJ : {{ getPJ }}</h4>

    <h4>type : {{ getType }}</h4>
    <h4>mind : {{ getMind }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import axios from 'axios'

/* eslint-disable */
    export default {
        name: 'result',
        computed: {
          ...mapGetters(['mbti', 'ei', 'ns', 'tf', 'pj']),
          getMBTI() { return this.$store.state.mbti; },
          getEI() { return this.$store.state.ei; },
          getNS() { return this.$store.state.ns; },
          getTF() { return this.$store.state.tf; },
          getPJ() { return this.$store.state.pj; },
          getMind() { return this.$store.state.mind; },
          getType() { return this.$store.state.type; }
        },
    }
</script>