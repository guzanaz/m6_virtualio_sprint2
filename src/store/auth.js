import Api from "../apis/Api";

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {}
    },
    getters: {
        authenticated(state) {
            return state.authenticated
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },
        SET_USER(state, value) {
            state.user = value
        }
    },
    actions: {
        async initialLoad(context) {
            if (localStorage.bgtrackerjwt) {
                Api.defaults.headers.common.Authorization = 'Bearer ${localStorage.bjtrackerjwt}';
                const res = await Api.get("/auth/currentUser");
                context.commit("CURRENT_USER_FETCHED", res.data.user);
            }
        }
    }
}
