import app from '../app'
import store from '../store/index';
export default [

    {
        path: "/admin",
        name: "admin-dashboard",
        component: () => import("../components/Backend/dashboard.vue"),
            children: [
                {
                path: '/admin/user',
                name: "Users",
                component: () => import("../components/Backend/pages/users/index.vue")
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

            ]
        },

]
