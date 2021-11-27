<template>
    <div class="lg:flex gap-5">
            <div class="lg:w-8/12">
                    <div class="card">
                        <div class="card-header flex items-center justify-between">
                            Category Lists
                        </div>

                        <div class="card-body">
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <!-- <th style="width: 100px">Image</th> -->
                                            <th> Name </th>
                                            <th> Slug </th>
                                            <th> date </th>
                                            <th style="width: 170px"> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="categories.length">
                                        <tr v-for="category in categories" :key="category.id">
                                            <!-- <td style="width: 100px"> <img :src="category.image" alt="" srcset=""> </td> -->
                                            <td> {{ category.name }} </td>
                                            <td> {{ category.slug }} </td>
                                            <td> {{ category.created_at | dateformat}} </td>
                                            <td style="width: 170px">

                                                <a @click.prevent="edit(category)" href="#"
                                                    class="btn btn-primary btn-sm">Edit</a>

                                                <a @click.prevent="deleteCategory(category)" href="#"
                                                    class="btn btn-danger btn-sm disabled">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>

                                    <tbody v-else>
                                        <tr>
                                            <td colspan="4">
                                                <!-- Loading Amimation -->
                                                <template v-if="Loading">
                                                    <content-loading />
                                                </template>
                                                <h5 v-else class="text-center mt-4 mb-4">No categories found.</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>

        <div class="CAform lg:w-4/12">
            <div class="card-header">
                Category
            </div>
            <form class="p-10 bg-white">
                <div>
                    <small v-if="errors.name" class="form-text text-danger">{{ errors.name[0] }}</small>
                    <input type="text" v-model="form.name" name="name" class="form-control" placeholder="name">
                </div>
                <br>

                <Dropimage v-on:image="image($event)"/>

                <button v-if="isEdit" @click.prevent="update()" type="submit" class="text-sm btn btn-lg btn-primary mt-3">Update</button>

                <button v-else @click.prevent="createcategory()" type="submit" class="text-sm btn btn-lg btn-primary mt-3">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categories: [],
            form:{
            name: '',
            image: '',
            },
            errors:'',
            cat_id: '',
            isEdit:false
        }
    },
    methods: {
        loadCategories(){
            axios.get('category').then(response => {
                this.categories = response.data;
            });
        },


        deleteCategory(category){

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {

                axios.post(`/api/category/delete/${category.id}`)
                let index = this.categories.indexOf(category);
                this.categories.splice(index, 1);

                   Swal.fire(
                    'Deleted!',
                    'Category Deleted.',
                    'success'
                    )
                }
            })
        },

         createcategory(){

                let data = new FormData();
                data.append('name', this.form.name);
                data.append('image', this.form.image);

                axios.post('category/create', data)
                    .then(response => {
                        this.form = '';
                        this.errors = '';
                        this.loadCategories();
                        Toast.fire({
                            icon: 'success',
                            title: 'Category Added successfully.'
                        });
                    })
                 .catch(e => {this.errors = e.response.data.errors});
          },


          update(){
                let id = this.cat_id;
                let data = new FormData();
                data.append('name', this.form.name);
                data.append('image', this.form.image);

             axios.post(`category/update/${id}`, data).then(() => {
             this.form.name = '';
             this.isEdit = false;
             this.loadCategories();

                Toast.fire({
                        icon: 'success',
                        title: 'Category Updated.'
                    });

            })
        },


        edit(category){
            this.isEdit = true
            this.form.name = category.name;
            this.cat_id = category.id
        },
        image(event){
            this.form.image = event
        }
    },
    mounted() {
        this.loadCategories();
    }
}
</script>

