import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
// import router from '../Router/index'

const store = new Vuex.Store({
    state: {
      user:[],
      permissions:[],
      token:'',
      authenticated:false,
      loading:false,
      Toast:'',
      Toastmassage:'',
    },
    getters: {
      get_Loading(state){
        return state.loading;
      },
      getUser(state){
        return state.user;
      },
      getAuthenticated(state){
          return state.authenticated;
      },

      Get_TOAST: state => {
          return state.Toast;
      },
      Get_TOKEN: state => {
          return state.token;
      },
      Get_TOAST_MASSAGE: state => {
          return state.Toastmassage;
      },
    },
    mutations:{
        SET_LOADING(state, data){
            state.loading = data;
        },
        SET_USER(state, data){
            state.user = data;
        },
        SET_TOKEN(state, data){
            state.token = data;
        },
        SET_AUTHENTICATED(state,data){
            state.authenticated = data;
        },
        SET_TOAST(state,data){
            state.Toast = data;
        },
        SET_TOAST_MASSAGE(state,data){
            state.Toastmassage = data;
        },
        SET_PERMISSIONS(state,data){
            state.permissions = data;
        },

    },
    actions:{
      authUser ({ commit, dispatch }) {
        return axios.get('profile').then(res => {
            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', res.data.user)
            commit('SET_PERMISSIONS', res.data.permissions)
            let token = localStorage.getItem('token');
            commit('SET_TOKEN', token);

        }).catch(() => {
            commit('SET_AUTHENTICATED', false)

        })
      },

    },




  })

export default store;

// state data seen to using getters and also using getMassage() function

// mutations set data into state and then this data return on getters function;

// auth(login)->mutations(SET_USER)->state(user)->gutters(getUser)->dashboard(index)
