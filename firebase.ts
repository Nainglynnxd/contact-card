// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzIRzv0aZRo5B4SVobWHy-spdQazLX0SM",
    authDomain: "contact-card-7d4cd.firebaseapp.com",
    projectId: "contact-card-7d4cd",
    storageBucket: "contact-card-7d4cd.appspot.com",
    messagingSenderId: "905818815696",
    appId: "1:905818815696:web:ea8ca4ac8e84ad714b72d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };