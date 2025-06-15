// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
    import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDginYCBn3AO8-cX85n22-OCd2BEnvD2PA",
  authDomain: "chizzy-notifications.firebaseapp.com",
  projectId: "chizzy-notifications",
  storageBucket: "chizzy-notifications.firebasestorage.app",
  messagingSenderId: "747632930586",
  appId: "1:747632930586:web:dc5c1b273f3877e06146a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// export { auth };
