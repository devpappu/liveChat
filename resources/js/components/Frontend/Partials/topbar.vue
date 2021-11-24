<template>
     <section class="">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<nav class="navbar navbar-expand-lg navbar-light navigation">
                     <router-link :to="{name: 'Home'}" class="navbar-brand">
                         <img src="https://news.devpappu.com/website/images/logo.png" alt="">
                     </router-link>
					<button class="navbar-toggler" type="button">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto main-nav ">
							<li class="nav-item active">
                                <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
							</li>
							<li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="#">Category</a>
							</li>
							<li class="nav-item">
								<a class="nav-link dropdown-toggle" href="https://news.devpappu.com/frontend-posts">
                                Blogs
								</a>
							</li>
							<li class="nav-item dropdown dropdown-slide">
								<a class="nav-link dropdown-toggle" href="">About Us</a>
							</li>
						</ul>
                        <ul v-if="!Authenticated" class="navbar-nav ml-auto mt-10">
							<li class="nav-item">
                                <router-link :to="{name: 'Login'}" class="nav-link login-button">Login</router-link>
							</li>
							<li class="nav-item">
                               <router-link :to="{name: 'Register'}" class="nav-link text-white add-button">Register</router-link>
                               <p v-if="Authenticated">hello</p>
							</li>
						</ul>
                        <ul v-if="Authenticated" class="navbar-nav ml-auto mt-10">
							<li class="nav-item">
                                <button @click.prevent="logout" class="nav-link login-button">Logout</button>
							</li>
							<li class="nav-item">
                               <router-link :to="{name: 'Profile'}" class="nav-link text-white add-button">Profile</router-link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</section>


</template>

<script>
import axios from 'axios'
export default {

    data: () => ({
      isPhoneOpen:true,

    }),

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

      openmenu(){
         document.getElementById("phonenav").style.display = "block"
         this.isPhoneOpen = false
      },

      closemenu(){
         document.getElementById("phonenav").style.display = "none"
         this.isPhoneOpen = true
      },

      mounted() {

      },


    },
}
</script>

<style scoped>

.menu-item{
padding: 10px 25px ;
}
.menu-item{
margin: 0px 5px ;
}

.auth-menu{
    margin-top: -10px;
}


@media screen and (max-width: 768px) {
   #phonenav{
       display: none;
   }

   nav.nav-menu {
    position: absolute;
    left: 0;
    top: 96%;
    background: rgb(3, 114, 90);
    width: 100%;
    padding: 10px;
}

nav.nav-menu > li{
    padding: 10px 0px;
    padding: 20px 0px;
    border-bottom: solid 3px rgb(3, 92, 72);
}

}

.brang-logo{
    padding: 0px;
}

a.menu-item.router-link-exact-active.router-link-active {
    background: #127d4f;
}

a.menu-item:hover{
    background: #127d4f;
}
</style>
