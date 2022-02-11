import Vue from 'vue';
import Router from 'vue-router';
import home from "../views/home.vue"
import dashboard from "../views/dashboard.vue"
import pruebaAPI from "../views/pruebaAPI.vue"
Vue.use(Router);

const routes = [{
        path: '/',
        redirect: {
            name: "home"
        }

    },

    {
        path: '/home',
        component: home,
        name: 'home'
    },

    {
        path: '/dashboard',
        component: dashboard,
        name: 'dashboard'
    },

    {
        path: '/pruebaAPI',
        component: pruebaAPI,
        name: 'pruebaAPI'
    }

];

export function createRouter() {
    return new Router({
        routes,
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }
            if (to.hash) {
                return { selector: to.hash }
            }
            return { x: 0, y: 0 }
        }
    });

}
