// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIGd0485-dEWPT5-hfbaujSEnLZbAqChA",
  authDomain: "loginpage-570e9.firebaseapp.com",
  projectId: "loginpage-570e9",
  storageBucket: "loginpage-570e9.appspot.com",
  messagingSenderId: "97925365770",
  appId: "1:97925365770:web:8900a9f69d1b0af5095ff3",
  measurementId: "G-JP87YWLXRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
const analytics=getAnalytics(app)
export default app;
