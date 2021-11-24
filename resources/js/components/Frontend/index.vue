<template>
    <div>
        <Header/>

        <div v-if="$route.name == 'Home'">
            <Home/>
        </div>
        
        <router-view></router-view>
        <FoterSection/>
    </div>
</template>

<script>
import Header from './Partials/topbar.vue'
import FoterSection from '../Frontend/Partials/footer.vue'
import Home from '../Frontend/Pages/home.vue'
export default {
    components:{Header,FoterSection,Home},
    data() {
        return {

        }
    },

    mounted(){
        console.log('home App')
    }
}
</script>

<style>
@import '../../../../public/Frontend/css/style.css';
@import '../../../../public/Frontend/plugins/font-awesome/css/font-awesome.min.css';
</style>
