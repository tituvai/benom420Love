// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAunks7IPpwaeV8nx607x_G5uZMFjfgt9w",
  authDomain: "benom420love.firebaseapp.com",
  projectId: "benom420love",
  storageBucket: "benom420love.firebasestorage.app",
  messagingSenderId: "369767702473",
  appId: "1:369767702473:web:d86aca914154a3426a9218",
  measurementId: "G-BFFFJGBJKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig