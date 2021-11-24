<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-header">Login</div>

                    <div class="card-body mt-5">

                        <form @submit.prevent="login">
                            <div>
                                <input type="email" v-model="form.email" name="email" class="form-control"
                                    placeholder="email">
                            </div><br>

                              <div>
                                <input type="password" v-model="form.password" name="password" class="form-control"
                                    placeholder="password">
                            </div><br>

                            <br>
                            <button type="submit" class="nav-link btn btn-lg btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

               axios.post('/api/login',this.form).then(response =>{
                const token = response.data.token;
                localStorage.setItem('token', token);
                })

            });
        },

    },

    mounted(){
        console.log('hello')
    }

}
</script>
