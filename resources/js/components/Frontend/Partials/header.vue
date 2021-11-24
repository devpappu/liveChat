<template>
     <section class="">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<nav class="navbar navbar-expand-lg navbar-light navigation">
					<a class="navbar-brand" href="https://news.devpappu.com">
						<img src="https://news.devpappu.com/website/images/logo.png" alt="">
					</a>

					<button class="navbar-toggler" type="button">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto main-nav ">
							<li class="nav-item active">
								<a class="nav-link" href="https://news.devpappu.com">Home</a>
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

                        						<ul class="navbar-nav ml-auto mt-10">
							<li class="nav-item">
								<a class="nav-link login-button" href="https://news.devpappu.com/login">Profile</a>
							</li>
							<li class="nav-item">
                                <a class="nav-link text-white add-button" href="https://news.devpappu.com/logout"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        Register
                                    </a>

                                    <form id="logout-form" action="https://news.devpappu.com/logout" method="POST" class="d-none">
                                        <input type="hidden" name="_token" value="tVKMMuWVg1r11xGXRrxWMCEuMnWwILAXCGmAy4sD">                                    </form>
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
