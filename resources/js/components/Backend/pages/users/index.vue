<template>
    <div class="container">

        <div class="coupon">
            <div class="row">
                <div class="col-8">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">All Coupons</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">

                              <table class="table">
                        <thead>
                            <tr>
                                <!-- <th style="width: 100px"> Id </th> -->
                                <th> Coupon Code</th>
                                <th> Amount </th>
                                <th> Type </th>
                                <th> User </th>
                                <th> Status </th>
                                <!-- <th> Date </th> -->
                                <th style="width: 170px"> Action </th>
                            </tr>
                        </thead>
                        <tbody v-if="coupons.length">
                            <tr v-for="coupon in coupons" :key="coupon.id">
                                <td> {{ coupon.coupon_code }} </td>
                                <td> {{ coupon.coupon_amount }} </td>
                                <td> {{ coupon.coupon_type }} </td>

                                <td>
                                     <span v-if="coupon.user_id" class="badge badge-success">{{ coupon.user.name }}</span>
                                     <span v-if="coupon.user_id == '0'" class="badge badge-success">All Users</span>
                                </td>
                                <td>
                                    <span v-if="coupon.status == 0" class="badge badge-success">Active</span>
                                    <span v-else class="badge badge-warning">In Active</span>
                                </td>

                                <!-- <td> {{ coupon.create_at }} </td> -->
                                <td style="width: 170px">

                                    <a @click.prevent="Editcoupon(coupon.id)" href="#"
                                        class="btn btn-primary btn-sm">Edit</a>

                                    <a @click.prevent="Deletecoupon(coupon.id)" href="#"
                                        class="btn btn-danger btn-sm">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else >
                            <tr>
                                <td colspan="4">
                                    <h5 class="text-center mt-4 mb-4">No coupon found. </h5>
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
                            <h3 class="card-title">Create New Coupon!</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->

                        <div class="card-body">
                            <form @submit.prevent="createcoupon">


                             <div class="form-group">
                                <label class="text-sm form-label" for="coupon_code">Coupon Code</label>
                                <input type="text" v-model="form.coupon_code" class="form-control text-sm"
                                    placeholder="coupon code">
                                <small v-if="errors.coupon_code" class="form-text text-danger">{{ errors.coupon_code[0] }}</small>
                            </div>


                                <div class="form-group">
                                    <label class="text-sm form-label">Coupon Type</label>
                                    <small v-if="errors.coupon_type"
                                        class="form-text text-danger">{{ errors.coupon_type[0] }}</small>

                                    <select v-model="form.coupon_type" id="coupon_type" class="form-control text-sm">
                                        <option value="" style="display: none" selected>Select Type
                                        </option>

                                        <option value="fixed" selected>Fixed</option>
                                        <option value="percentage" selected>Percentage</option>
                                    </select>
                                </div>


                            <div class="form-group ">
                                <label class="text-sm form-label" for="coupon_amount">Amount</label>
                                <div class="coupon-data mr-3">
                                    <input type="number" v-model="form.coupon_amount" name="coupon_amount" class="form-control text-sm"
                                        placeholder="coupon_amount">
                                    <small v-if="errors.coupon_amount"
                                        class="form-text text-danger">{{ errors.coupon_amount[0] }}</small>
                                </div>
                            </div>



                                <div class="form-group">
                                    <label class="text-sm form-label" for="status">Status</label>
                                    <small v-if="errors.status"
                                        class="form-text text-danger">{{ errors.status[0] }}</small>
                                    <select v-model="form.status" id="status" class="form-control text-sm">
                                        <option value="" style="display: none" selected>Select Status</option>
                                        <option value="0" selected>Publish</option>
                                        <option value="1" selected>Draft</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label class="text-sm form-label" >User</label>

                                    <select v-model="form.user_id" id="user_id" class="form-control text-sm">

                                          <option value="" style="display: none" selected>Select User
                                            </option>

                                          <option :value="0" selected>All Users </option>

                                        <option v-for="user in users" :key="user.id" :value="user.id" selected>{{user.name}}</option>

                                    </select>
                                </div>

                                <button v-if="edit_coupon_mode" @click.prevent="Updatecoupon()" type="submit" class="btn btn-primary">Update</button>

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
          coupon_code: '',
          coupon_amount: '',
          coupon_type: '',
          expiry_date: '',
          minimum_cost: '',
          usage_limit: '',
          status: '',
          category_id:'',
          user_id: ''
        },
      categories:[],
      users:{},
      coupons:{},
      edit_coupon_mode: false,
      edit_coupon:{},
      edit_coupon_id:{},
      errors:''

      }),


        methods: {

            loadCategory(){
                axios.get('/api/category')
                .then(response =>{
                    console.log(response);
                    this.categories = response.data;
                });
           },

            createcoupon(){
                axios.post('/api/coupon/create',this.form)
                .then(response => {
                    this.errors = '';
                    Toast.fire({
                        icon: 'success',
                        title: 'coupon Added successfully.'
                    });
                    this.loadCoupon();
                    console.log(response)
                })
                 .catch(e => {
                     this.errors = e.response.data.errors

                     });
           },

            Editcoupon(id){
                this.edit_coupon_id = id;
                this.edit_coupon_mode = true
                axios.get(`/api/coupon/edit/${id}`)
                .then(res =>{
                    this.form.coupon_code = res.data.coupon_code;
                    this.form.coupon_amount = res.data.coupon_amount;
                    this.form.coupon_type = res.data.coupon_type;
                    this.form.user_id = res.data.user_id;
                    this.form.status = res.data.status;
                });
            },

            Deletecoupon(id){
                axios.post(`/api/coupon/delete/${id}`)
                .then(res =>{
                   Toast.fire({
                            icon: 'success',
                            title: 'Coupon Updated successfully.'
                     });
                    console.log(res)
                   this.loadCoupon();
                });
            },

            Updatecoupon(){

                 const id = this.edit_coupon_id;

                axios.post(`/api/coupon/update/${id}`, this.form)
                  .then(() =>{

                     Toast.fire({
                            icon: 'success',
                            title: 'Coupon Updated successfully.'
                       });

                    this.loadCoupon();
                });
            },

            loadCoupon(){
                axios.get('/api/coupons')
                .then(response =>{
                    this.coupons = response.data;
                });
            },

            loadUsers(){
               axios.get('/api/users').then(response => {
                 this.users = response.data;
            });
        },

        },


        mounted(){
        this.loadCategory();
        this.loadCoupon();
        this.loadUsers();
        },


    }
</script>



