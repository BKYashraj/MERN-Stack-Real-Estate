// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-de4ec.firebaseapp.com",
  projectId: "mern-estate-de4ec",
  storageBucket: "mern-estate-de4ec.appspot.com",
  messagingSenderId: "39977952359",
  appId: "1:39977952359:web:7ee45ed2614383f66f60c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);