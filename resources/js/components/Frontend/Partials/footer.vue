<template>
<div class="footer">
    <footer class="footer section section-sm">
        <!-- Container Start -->
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-7 offset-md-1 offset-lg-0">
                    <!-- About -->
                    <div class="block about">
                        <!-- footer logo -->
                        <img src="" alt="">
                        <!-- description -->
                        <p class="alt-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <!-- Link list -->
                <div class="col-lg-2 offset-lg-1 col-md-3">
                    <div class="block">
                        <h4>Site Pages</h4>
                        <ul>
                            <li><a href="#">Boston</a></li>
                            <li><a href="#">How It works</a></li>
                            <li><a href="#">Deals & Coupons</a></li>
                            <li><a href="#">Articls & Tips</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <!-- Link list -->
                <div class="col-lg-2 col-md-3 offset-md-1 offset-lg-0">
                    <div class="block">
                        <h4>Quick Pages</h4>
                        <ul>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Single Page</a></li>
                            <li><a href="#">Store Single</a></li>
                            <li><a href="#">Single Post</a>
                            </li>
                            <li><a href="#">Blog</a></li>



                        </ul>
                    </div>
                </div>
                <!-- Promotion -->
                <div class="col-lg-4 col-md-7">
                    <!-- App promotion -->
                    <div class="block-2 app-promotion">
                        <div class="mobile d-flex">
                            <a href="">
                                <!-- Icon -->
                                <img src="https://news.devpappu.com/website/images/footer/phone-icon.png"
                                    alt="mobile-icon">
                            </a>
                            <p>Get the Dealsy Mobile App and Save more</p>
                        </div>
                        <div class="download-btn d-flex my-3">
                            <a href="#"><img src="" class="img-fluid" alt=""></a>
                            <a href="#" class=" ml-3"><img src="" class="img-fluid"
                                    alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container End -->
    </footer>

</div>
</template>

<script>
import axios from 'axios'
export default {

      data() {
          return {
              publicPath: process.env.BASE_URL

          }
      },
    methods:{
      logout(){
          axios.post('/api/auth/logout',{token: localStorage.getItem('token')})
                .then(() =>{
                    this.$store.commit('SET_AUTHENTICATED', false);
                    this.$store.commit('SET_USER', '');
                    localStorage.removeItem("token");
                    this.$router.push({name:'home'});
                })
      },


    },
}
</script>
