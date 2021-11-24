<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted(){
        console.log(this.$route)
    }
}
</script>
