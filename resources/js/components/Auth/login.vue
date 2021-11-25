<template>
<section class="login py-5 border-top-1">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-8 align-item-center">
                <div class="border">
                    <h3 class="bg-gray p-4">Login Now</h3>
                    <form @submit.prevent="login">
                        <fieldset class="p-4">
                            <input type="text" v-model="form.email" placeholder="Email*" class="border p-3 w-100 my-2">
                            <input type="password" v-model="form.password" placeholder="Password*" class="border p-3 w-100 my-2">
                            <div class="loggedin-forgot">
                                    <input type="checkbox" id="keep-me-logged-in">
                                    <label for="keep-me-logged-in" class="pt-3 pb-2">Keep me logged in</label>
                            </div>
                            <button type="submit" class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3">Log in</button>
                            <a class="mt-3 d-block  text-primary" href="#">Forget Password?</a>
                             <router-link :to="{name: 'Register'}" class="mt-3 d-inline-block text-primary">Register</router-link>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            errors: '',
            success: '',
            form:{
                email: '',
                password: ''
            }
        }
        },
    methods:{

         login(){
             axios.get('/sanctum/csrf-cookie').then(response => {

               axios.post('login',this.form).then(response =>{
                 const token = response.data.token;
                 const user_role = response.data.user.role;


                    if(user_role == "admin"){
                        this.$store.commit('SET_AUTHENTICATED',true);
                        this.$router.push({name:'Profile'});
                        this.$store.commit('SET_USER', response.data.user);
                        this.$store.commit('SET_TOKEN', token);
                        localStorage.setItem('token', token);
                    }

                    if(user_role == "superadmin"){
                        this.$store.commit('SET_AUTHENTICATED',true);
                        this.$router.push({name:'Profile'});
                        this.$store.commit('SET_USER', response.data.user);
                         this.$store.commit('SET_TOKEN', token);
                        localStorage.setItem('token', token);
                    }

                    if(user_role == "user"){
                        this.$store.commit('SET_AUTHENTICATED',true);
                        this.$router.push({name:'Profile'});
                        this.$store.commit('SET_USER', response.data.user);
                        this.$store.commit('SET_TOKEN', token);
                        localStorage.setItem('token', token);
                    }



                })
                .catch(error  =>{
                   console.log(error)
                })

            });
        },

    },

    mounted(){
        console.log('hello')
    }

}
</script>
