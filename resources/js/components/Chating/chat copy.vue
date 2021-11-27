
<template>
   <div class="row">

       <div class="col-8">
           <div class="card card-default">
               <div class="card-header">Messages</div>
               <div class="card-body p-0">
                   <ul class="list-unstyled" style="height:300px; overflow-y:scroll" v-chat-scroll>
                       <li class="p-2" v-for="(message, index) in messages" :key="index" >

                           <div>
                               <strong>{{ message.user.name }}</strong>
                              {{ message.message }}
                           </div>

                       </li>
                   </ul>
               </div>

               <input
                    @keydown="sendTypingEvent"
                    @keyup.enter="sendMessage"
                    v-model="newMessage"
                    type="text"
                    name="message"
                    placeholder="Enter your message..."
                    class="form-control">
           </div>
            <span class="text-muted" v-if="activeUser" >{{ activeUser.name }} is typing...</span>
       </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: [],
                newMessage: '',
                users:[],
                activeUser: false,
                typingTimer: false,
            }
        },
        created() {
            this.fetchMessages();

            Echo.private('chat')
                .listen('ChatEvent', (e) => {
                    this.messages.push({
                        message: e.message.message,
                        user: e.user
                    });
                });
            },

        methods: {

            fetchMessages() {
                axios.get('messages').then(response => {
                    this.messages = response.data;
                })
            },

            sendMessage() {
                this.messages.push({
                    user: this.AuthUser,
                    message: this.newMessage
                });
                axios.post('messages', {message: this.newMessage});
                this.newMessage = '';
            },

            sendTypingEvent() {
                Echo.join('chat')
                    .whisper('typing', this.AuthUser);
                console.log(this.AuthUser.name + ' is typing now')
            }
        },

    }
</script>
