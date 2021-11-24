import app from '../app'
import store from '../store/index';
export default [

    {
        path: "/admin",
        name: "admin-dashboard",
        component: () => import("../components/Backend/adminDashboard.vue"),
            beforeEnter: (to, from, next) => {

                if(store.state.authenticated == true){
                    next();
                }else{
                    return next({ name: 'Profile'});
                }
            },
            children: [
                {
                path: '/admin/user',
                name: "Users",
                component: () => import("../components/Backend/pages/users/index.vue")
                },
            ]
        },

]
