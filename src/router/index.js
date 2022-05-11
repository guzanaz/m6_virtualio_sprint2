import Vue from 'vue';
import Router from 'vue-router';
import home from "../views/home.vue"
import dashboard from "../views/dashboard.vue"
import pruebaAPI from "../views/pruebaAPI.vue"
import modaltest from "../views/Modaltest.vue"

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
    name: 'dashboard',
    meta: { authOnly: true }

},

{
    path: '/pruebaAPI',
    component: pruebaAPI,
    name: 'pruebaAPI'
},

{
    path: '/Modaltest',
    component: modaltest,
    name: 'modaltest'
}

];

export function createRouter() {
    const router = new Router({
        routes,
        mode: 'history',
        scrollBehavior(to, _from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }
            if (to.hash) {
                return { selector: to.hash }
            }
            return { x: 0, y: 0 }
        }
    });

    router.beforeEach((to, _from, next) => {

        if (to.meta.authOnly && !localStorage.getItem("auth")) {
            // this route requires auth, check if logged in
            // if not, redirect to login page.
            return {
                path: '/',
                // save the location we were at to come back later
                query: { redirect: to.fullPath },
            }
        }
        next();
    });
    return router;

}
