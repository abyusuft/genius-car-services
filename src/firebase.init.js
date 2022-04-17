// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmnjC0JiXsavg9Dxcs0GSZ7uCdV1xZgMY",
    authDomain: "genius-car-services-1bbe1.firebaseapp.com",
    projectId: "genius-car-services-1bbe1",
    storageBucket: "genius-car-services-1bbe1.appspot.com",
    messagingSenderId: "336807101313",
    appId: "1:336807101313:web:e64e8c6c29c05271025e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;