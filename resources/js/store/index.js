import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
// import router from '../Router/index'

const store = new Vuex.Store({
    state: {
      user:[],
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
        SET_AUTHENTICATED(state,data){
            state.authenticated = data;
        },
        SET_TOAST(state,data){
            state.Toast = data;
        },
        SET_TOAST_MASSAGE(state,data){
            state.Toastmassage = data;
        },

    },
    actions:{
      authUser ({ commit, dispatch }) {
        return axios.get('user').then(res => {
            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', res.data)

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
