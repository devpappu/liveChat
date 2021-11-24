/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import router from './router/route';

window.Vue = require('vue').default;
axios.defaults.baseURL = '/api/'
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('main-component', require('./App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// mixin
Vue.mixin
   ({
    computed:{
            Authenticated(){
                return  this.$store.getters.getAuthenticated;
            },

            AuthUser(){
                return  this.$store.getters.getUser;
            },

            Loading(){
                return  this.$store.getters.get_Loading;
            },
            websiteaddress(){
                return  'http://sanctum.test/';
            },
            url(){
                return  'http://sanctum.test/';
            },
        },

    })

import store from './store/index'


let auth = localStorage.getItem("token");

if(auth){
    // Load With Auth systm
    store.dispatch('authUser').then(() => {
        const app = new Vue({
            el: '#app',
            router,
            store
        });

    });
}else {

    const app = new Vue({
        el: '#app',
        router,
        store
    });

}
