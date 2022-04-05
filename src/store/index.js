import { Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './auth';



export function createStore() {
    return new Store({
        plugins: [
            createPersistedState()
        ],
        modules: {
            auth
        },
    })
}