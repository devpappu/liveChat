<template>
<div>
    <router-view></router-view>
    <div class="live-chat">

         <!-- <div v-if="iSchat == 'on'" class="chat-form">

             <div class="CHform">
                 <LiveChat/>
             </div>

         </div>

         <button @click="chat" class="nav-link text-white add-button">Chat now</button> -->
    </div>

</div>
</template>

<script>
import  LiveChat from './components/Chating/chat.vue';
import { firebase } from "firebase/app";
import { getMessaging } from "firebase/messaging";
export default {
    components:{LiveChat},
    data() {
        return {
            iSchat: 'off',
        }
    },

    methods:{

       chat(){

            if(this.iSchat = 'off'){
             this.iSchat = 'on'
            }
       }
    },

    mounted(){
         // Retrieve Firebase Messaging object.
    //     // const messaging = getMessaging();;
    //     const messaging = firebase.messaging();
    //     // Add the public key generated from the console here.
    //     messaging.usePublicVapidKey("BDFsxZo52ERtmAqIR_yRW9RF1a0wKWwFOOPz4U4MqtH2MGpW0nHKtgb4RF9dYwmlJfac0V4MLyEuzVi0hKXogfI");

    //     function sendTokenToServer(fcm_token) {
    //         const user_id = this.AuthUser.id;
    //         //console.log($user_id);
    //         axios.post('save-token', {
    //             fcm_token, user_id
    //         })
    //             .then(res => {
    //                 console.log(res);
    //             })
    //     }

    //     function retreiveToken(){
    //         messaging.getToken().then((currentToken) => {
    //             if (currentToken) {
    //                 sendTokenToServer(currentToken);
    //                 // updateUIForPushEnabled(currentToken);
    //             } else {

    //                 alert('You should allow notification!');
    //             }
    //         }).catch((err) => {
    //             console.log(err.message);
    //             // showToken('Error retrieving Instance ID token. ', err);
    //             // setTokenSentToServer(false);
    //         });
    //     }
    //     retreiveToken();
    //     messaging.onTokenRefresh(()=>{
    //         retreiveToken();


    //     });

    //     messaging.onMessage((payload)=>{
    //         console.log('Message received');
    //         console.log(payload);

    //         location.reload();
    //     });
    }
}
</script>

<style>
.live-chat {
    position: fixed;
    bottom: 60px;
    right: 60px !important;
}
.CHform {
    position: fixed;
    bottom: 110px;
    right: 10px !important;
    width: 500px;
}
</style>
