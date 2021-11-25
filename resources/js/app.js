/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import router from './router/route';

window.Vue = require('vue').default;
import moment from 'moment';

axios.defaults.baseURL = '/api/'
let token = ''

if (localStorage.getItem('token')){
    token = localStorage.getItem('token');
}

axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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
//Vue Filter to make first letter Capital
Vue.filter("strToUpper", function(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('currency', value=> {
    return '$' + parseFloat(value).toFixed(2);
});

Vue.filter('trim', value=> {
    if (!value) return ''
    return value.substring(0, 40) + '...'
});

Vue.filter('trimpost', value=> {
    if (!value) return ''
    return value.substring(0, 30) + '...'
});


Vue.filter('dateformat', value=> {
    if (!value) return ''
    return moment(String(value)).format('LL')
});

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
            Token(){
                return  this.$store.getters.Get_TOKEN;
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
