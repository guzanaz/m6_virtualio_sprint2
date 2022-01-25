import Vue from 'vue';
import Router from 'vue-router';
import home from "../views/home.vue"
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
        redirect: {
            name: "dashboard"
        }

    }
];

export function createRouter() {
    const router = new Router({
        routes,
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }
            if (to.hash) {
                return {
                    selector: to.hash
                }
            }
            return {
                x: 0,
                y: 0
            }
        }
    });

    return router;
}