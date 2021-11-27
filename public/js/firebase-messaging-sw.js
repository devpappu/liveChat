// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here, other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object

// const firebaseConfig = {
//     apiKey: "AIzaSyCQ7IOKlS_DwsDCtDW6Q2ZPU9DToI2sC_Q",
//     authDomain: "laravel-1aa4e.firebaseapp.com",
//     projectId: "laravel-1aa4e",
//     storageBucket: "laravel-1aa4e.appspot.com",
//     messagingSenderId: "531958872479",
//     appId: "1:531958872479:web:6be88bfa10cc02854c25aa"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const {title, body} = payload.notification;
//     const notificationOptions = {
//         body,
//     };

//     return self.registration.showNotification(title,
//         notificationOptions);
// });
