import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from './admin';
import SuperAdmin from './superadmin';
import store from '../store/index';


Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        // super admin route
        ...SuperAdmin,
        // admin route
        ...Admin,
          {
            path: "/",
            name: "Home",
            component: () => import("../components/Frontend/index.vue"),
                children: [
                    {
                    path: '/chating',
                    name: "Chat",
                    component: () => import("../components/Chating/chat.vue")
                    },
                    {
                    path: '/login',
                    name: "Login",
                    component: () => import("../components/Auth/login.vue")
                    },
                    {
                    path: '/register',
                    name: "Register",
                    component: () => import("../components/Auth/rigister.vue")
                    },
                    {
                    path: '/profile',
                    name: "Profile",
                    component: () => import("../components/Auth/profile/profile.vue"),

                    beforeEnter: (to, from, next) => {

                        if(store.state.authenticated == true){
                            next();
                        }else{
                            return next({ name: 'Login'});
                        }
                    },
                    },
                    {
                    path: '/chat',
                    name: "Chat",
                    component: () => import("../components/Chating/chat.vue"),

                    beforeEnter: (to, from, next) => {

                        if(store.state.authenticated == true){
                            next();
                        }else{
                            return next({ name: 'Login'});
                        }
                    },
                    },

                ]
            },

    ]
});

export default routes;

