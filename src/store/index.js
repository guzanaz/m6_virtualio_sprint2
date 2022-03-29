

import { Store } from 'vuex';

export function createStore() {
    return new Store({
        state: {
            user: {
                id: null,
                email:'',
                username: '',
            },      
        },
        getters:{
            isAuthenticated(state){
                return !!state.user.id;
            }
        },
        mutations:{
            CURRENT_USER_FETCHED(state, user) {
                state.user.id = user.id;
                state.user.email = user.email;
                state.user.name = user.username;
            }
        },
        

    });
}
