// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW7q7LvqmNAz1eQE46AwuMr0W04lkcnyM",
    authDomain: "ema-john-firebase-fe04d.firebaseapp.com",
    projectId: "ema-john-firebase-fe04d",
    storageBucket: "ema-john-firebase-fe04d.appspot.com",
    messagingSenderId: "870330394969",
    appId: "1:870330394969:web:0c62e0265598ca672a0448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;