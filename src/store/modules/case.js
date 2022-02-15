export default {
    namespaced: true,
    state() {
        return {
            collectionName: ''
        }
    },
    mutations: {
        updateCaseCollectionName(state, payload) {
            state.collectionName = payload.collectionName
        }
    },
    actions: {
        setCollectionName(context, payload) {            
            context.commit('updateCaseCollectionName', payload);
        }   
    },
    getters: {
        getCaseCollectionName(state) {
            console.log(state.collectionName)
            return state.collectionName;
        }
    },
}