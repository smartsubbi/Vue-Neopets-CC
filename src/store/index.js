import { createStore } from 'vuex';

import collectiblesModule from './modules/collectibles.js';
import caseModule from './modules/case.js';

const store = createStore({
    modules: {
        collectiblesModule,
        caseModule
    },
    state() {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})

export default store;