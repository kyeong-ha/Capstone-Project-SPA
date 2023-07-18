import { createApp } from 'vue'
import App from '../App.vue'
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"

const app = createApp(App)
app.use(Vuex);

function getMBTIelements(mbti){
    let ddb_params = {
        ExpressionAttributeValues: {
            ':s': {S: '0'},
            ':mbti' : {S: mbti}
        },
        KeyConditionExpression: 'id >= :s',
        ProjectionExpression: 'type, mind',
        FilterExpression: 'contains (mbti, :mbti)',
        TableName: 'MBTI-ctmepefwojhwlf2mhhohuiu6rq-dev'
    };

    ddb.query(ddb_params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Items);
            return { type: data.Items.type, mind: data.Items.mind };
        }
    });
}

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
        UPDATE_VAL(state, params) {
            state.mbti = params.mbti;
            state.ei = params.ei;
            state.ns = params.ns;
            state.tf = params.tf;
            state.pj = params.pj;

            const mbtiElement = getMBTIelements(params.mbti);
            state.type = mbtiElement.type;
            state.mind = mbtiElement.mind;
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