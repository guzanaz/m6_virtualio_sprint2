

import Api from "../apis/Api";
import { Store } from 'vuex';


export function createStore() {
    return new Store({
        state: {
            authenticated:false,
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
                state.user.username = user.username;
            }
        },
        actions:{
            async initialLoad(context){
                if (localStorage.bgtrackerjwt){
                    Api.defaults.headers.common.Authorization = 'Bearer ${localStorage.bjtrackerjwt}';
                    const res = await Api.get("auth/currentUser");
                    context.commit("CURRENT_USER_FETCHED", res.data.user);
                }
            }
        }  
    });
}

