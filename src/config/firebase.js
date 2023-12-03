// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjlKd2pe6rM1ZO5_vdJo6YMNzI88lTwKY",
  authDomain: "player-fit.firebaseapp.com",
  projectId: "player-fit",
  storageBucket: "player-fit.appspot.com",
  messagingSenderId: "493906551001",
  appId: "1:493906551001:web:aa11734c01add03ba99ec8",
  measurementId: "G-9YSVT5MNJ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);