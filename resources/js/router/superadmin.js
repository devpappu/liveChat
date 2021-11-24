import app from '../app'
import store from '../store/index';
export default [

    {
        path: "/super/admin",
        name: "super-admin-dashboard",
        component: () => import("../components/Backend/superadmindashboard.vue"),
            beforeEnter: (to, from, next) => {

                if(store.state.user.role == 'superadmin'){
                    next();
                }else{
                    return next({ name: 'Profile'});
                }
            },
            children: [
                {
                path: '/super/admin/user',
                name: "Users",
                component: () => import("../components/Backend/pages/users/index.vue")
                },
                {
                path: '/super/admin/category',
                name: "Category",
                component: () => import("../components/Backend/pages/category/index.vue")
                },

            ]
        },

]
