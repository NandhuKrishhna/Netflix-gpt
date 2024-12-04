// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUw-Ac_sHJxNgYvypmjpCqsUjNBSwOqQA",
  authDomain: "netflixgpt-f1dc6.firebaseapp.com",
  projectId: "netflixgpt-f1dc6",
  storageBucket: "netflixgpt-f1dc6.firebasestorage.app",
  messagingSenderId: "890840235900",
  appId: "1:890840235900:web:3999845f62e73a2770eef9",
  measurementId: "G-M25LSNEHSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);