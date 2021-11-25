import app from '../app'
import store from '../store/index';
export default [

    {
        path: "/admin",
        name: "admin-dashboard",
        component: () => import("../components/Backend/adminDashboard.vue"),
            beforeEnter: (to, from, next) => {

                if(store.state.user.role == 'admin'){
                    next();
                }else{
                    return next({ name: 'Profile'});
                }
            },
            children: [

                {
                    path: '/admin/category',
                    name: "Admin-Category",
                    component: () => import("../components/Backend/pages/category/index.vue")
                },
            ]
        },

]
