<template>
    <div class="">
        <!--sidebar start-->
        <div class="admin">
            <nav class="sidebar bg-white shadow-lg" id="sidebar">

                <div class="mt-3 p-2 text-center text-black" id="authName">
                    <span>! Hello {{AuthUser.name}}</span>
                </div>

                <ul class="mt-2">
                    <li>
                        <router-link :to="{name: 'admin-dashboard'}" class="">
                            <i class="las la-cart-arrow-down"></i><span class="menuText">Dashboard</span></router-link>
                    </li>

                   <li>
                        <router-link :to="{name: 'Admin-Category'}" class="">
                            <i class="las la-cart-arrow-down"></i><span class="menuText">Category</span></router-link>
                    </li>

                   <li>
                        <router-link :to="{name: 'Home'}" class="">
                            <i class="las la-cart-arrow-down"></i><span class="menuText">Home</span></router-link>
                    </li>

                    <li>
                        <a href="#" @click="logout()"><i class="las la-sign-out-alt"></i><span
                                class="menuText">Logout</span></a>
                    </li>

                </ul>

            </nav>

            <!--sidebar end-->

            <div class="content  font-normal">

                <!--header area start-->
                <div
                    class="flex items-center  justify-between px-2 h-16 bg-purple-700 shadow-2xl">
                    <div class="pl-3 w-full">
                        <span class="admin-name">!! Hello {{AuthUser.name}}</span>
                        <a href="#" id="icon-menu" @click="leftmenutext()"><i
                                class="las la-expand-arrows-alt lg:hidden"></i></a>
                    </div>

                </div>
                <!--header area end-->

                <div class="routing h-screen py-4 px-4 bg-gray-100">
                    <div v-if="$router.currentRoute.name === 'admin-dashboard'">
                        <admin-dashboad></admin-dashboad>
                    </div>

                    <router-view></router-view>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import AdminDashboad from './pages/index.vue'
    export default {
        components: {AdminDashboad},
        data() {
            return {
                menutex: true,
            }
        },
    methods:{
      logout(){
          axios.post('logout').then(res =>{
              console.log(res)
              this.$store.commit('SET_AUTHENTICATED',false);
              this.$router.push({name:'Home'});
              this.$store.commit('SET_USER', null);
              localStorage.removeItem('token')
          })
        },

      leftmenutext(){
          document.getElementById("sidebar").style.display = "block";
      }

    },
        mounted() {
            console.log('Backend Component mounted.');
        }
    }
</script>

<style  scoped>

.router-link-active{
    background: #e7eaeb
}


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css');
@import url('https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css');
*body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;

}
*{
    font-style: normal;
}


/* width */

::-webkit-scrollbar {
    width: 10px;
}


/* Track */

 ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 0px !important;
}


/* Handle */

 ::-webkit-scrollbar-thumb {
    background: #bac1c4;
    border-radius: 10px;
}


/* Handle on hover */

 ::-webkit-scrollbar-thumb:hover {
    background: #a6b2b4;
}

.content {
    margin-left: 172px;
    height: 100vh;
    transition: 0.3s !important;
}

@media screen and (max-width: 780px) {
    .content {
        margin-left: 55px !important;
    }
    .admin.menu-setting .sidebar {
        width: 60px !important;
    }
}



/* JS MENU */

.admin.menu-setting .sidebar {
    width: 68px;
}

.admin.menu-setting .content {
    margin-left: 67px
}
.admin.menu-setting .sidebar a span,
.admin.menu-setting .profile_info {
    display: none;
}

.admin.menu-setting .sidebar a {
    padding-left: 22px;
}

.admin{
    background: #f3f3f5 !important;
}


/* Start Sidebar*/

.sidebar {
    z-index: 1;
    top: 0;
    /* margin-top: 57px;
    padding-top: 14px; */
    position: fixed;
    left: 0;
    width: 170px;
    height: 100%;
    /* transition: 0.3s !important; */
    transition-property: left;
    overflow-y: auto;
}

.sidebar a {
    font-size: 14px;
    color: #363940 !important;
    display: block;
    width: 100%;
    line-height: 45px;
    text-decoration: none;
    padding-left: 25px;
    box-sizing: border-box;
    font-family: sans-serif;
    font-style: normal !important;
    /* transition: 0.1s; */
}

.sidebar a:hover {
    color: black;
    /* font-size: 15px; */
    background-color: #eaeff3;
    padding-left: 24px;
}

a#icon-menu {
    color: white;
    margin-left: 35px;
    font-size: 18px;
}

.sidebar i {
    padding-right: 10px;
}

/* .top-header {
    z-index: 1;
    position: absolute;
    top: 0;
} */

.admin-name {
    color: white;
}

.sidebar li {
    padding: 2px 10px;
}



/* End Sidebar*/


/* Start header css on phone */

@media screen and (max-width: 780px) {
    span.admin-name {
        display: none;
    }
    .sidebar a {
        padding-left: 20px !important;
    }
    .admin.menu-setting .sidebar {
        width: 0px !important;
    }
    .content {
        margin-left: 0px !important;
    }


    .admin.menu-setting .sidebar a span,
.admin.menu-setting .profile_info {
    display: none !important;
}
}

@media screen and (max-width: 780px) {
    .sidebar  {
        display: none;
    }

}


</style>
