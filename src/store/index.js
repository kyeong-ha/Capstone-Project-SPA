import { createApp } from 'vue'
import App from '../App.vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


const app = createApp(App)
app.use(Vuex)



export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        mbti: null,
        ei: null,
        ns: null,
        tf: null,
        pj: null,
        type: null,
        mind: null
    },
    mutations: {
        async UPDATE_VAL(state, params) {
            state.mbti = params.mbti;
            state.ei = params.ei;
            state.ns = params.ns;
            state.tf = params.tf;
            state.pj = params.pj;

            state.type = params.type;
            state.mind = params.mind;
        }
    },
    getters: {
        mbti(state) { return state.mbti },
        ei(state) { return state.ei },
        ns(state) { return state.ns },
        tf(state) { return state.tf },
        pj(state) { return state.pj },
        type(state) { return state.type },
        mind(state) { return state.mind },
    },
});