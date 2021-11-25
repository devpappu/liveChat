<template>
    <div class="container">

        <div class="user">
            <div class="row">
                <div class="col-8">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">All users</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">

                              <table class="table">
                        <thead>
                            <tr>
                                <!-- <th style="width: 100px"> Id </th> -->
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Date</th>
                                <th style="width: 170px"> Action </th>
                            </tr>
                        </thead>
                        <tbody v-if="users.length">
                            <tr v-for="user in users" :key="user.id">
                                <td> {{ user.name | strToUpper}} </td>
                                <td> {{ user.email }} </td>

                                <td>
                                     <span class="badge badge-success">{{ user.role | strToUpper}}</span>
                                </td>

                                <td> {{ user.created_at | dateformat}} </td>

                                <!-- <td> {{ user.create_at }} </td> -->
                                <td style="width: 170px">
                                    <a @click.prevent="Edituser(user)" href="#"
                                        class="btn btn-primary btn-sm">Edit</a>
                                    <a @click.prevent="Deleteuser(user.id)" href="#"
                                        class="btn btn-danger btn-sm">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else >
                            <tr>
                                <td colspan="4">
                                    <h5 class="text-center mt-4 mb-4">No user found. </h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Create New user!</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->

                        <div class="card-body">
                            <form @submit.prevent="createuser">

                               <div class="my-2">
                                    <label class="block text-gray-800">Name</label>
                                    <input type="email" v-model="form.name" id="name" placeholder="name"
                                        class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                                    <!-- <small v-if="errors.name" class="form-text text-danger">{{ errors.name[0] }}</small> -->
                                </div>
                               <div class="my-2">
                                    <label class="block text-gray-800">Email</label>
                                    <input type="email" v-model="form.email" id="email" placeholder="email"
                                        class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                                    <!-- <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small> -->
                                </div>

                                <div class="form-group">

                                    <label class="text-sm form-label">User Role</label>

                                    <select v-model="form.role" id="user_type" class="form-control text-sm">
                                        <option value="" style="display: none" selected>Select Role
                                        </option>
                                        <option value="user" selected>User</option>
                                        <option value="admin" selected>Admin</option>
                                        <option value="superadmin" selected>Super Admin</option>
                                    </select>
                                </div>


                                <button v-if="edit_user_mode" @click.prevent="Updateuser()" type="submit" class="btn btn-primary">Update</button>

                                <button v-else type="submit" class="btn btn-primary">Submit</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
     data: () => ({
        form: {
          email: '',
          role: '',
          name: '',
        },
      users:{},
      errors:'',
      edit_user_id:'',
      edit_user_mode:false,
      }),


        methods: {

            loadUser(){
                axios.get('users')
                .then(response =>{
                    console.log(response);
                    this.users = response.data;
                });
           },

            createuser(){
                axios.post('/api/user/create',this.form)
                .then(response => {
                    this.errors = '';
                    Toast.fire({
                        icon: 'success',
                        title: 'user Added successfully.'
                    });
                    this.loadUser();
                    console.log(response)
                })
                 .catch(e => {
                     this.errors = e.response.data.errors

                     });
           },

            Edituser(user){
                this.edit_user_id = user.id;
                this.edit_user_mode = true;
                this.form.name = user.name
                this.form.email = user.email
                this.form.role = user.role
            },

            Deleteuser(id){
                axios.post(`user/delete/${id}`)
                .then(res =>{
                   Toast.fire({
                            icon: 'success',
                            title: 'User Updated successfully.'
                     });
                    console.log(res)
                   this.loadUser();
                });
            },

            Updateuser(){

                 const id = this.edit_user_id;

                axios.post(`user/update/${id}`, this.form)
                  .then(() =>{

                     Toast.fire({
                            icon: 'success',
                            title: 'User Updated successfully.'
                       });
                       
                    this.edit_user_id = null;
                    this.edit_user_mode = false;
                    this.form.name = null
                    this.form.email = null
                    this.loadUser();
                });
            },




        },


        mounted(){
        this.loadUser();
        },


    }
</script>



