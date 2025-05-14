// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Replace with your actual Firebase config (from Firebase Console > Project Settings)
const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "dsfsd.firebaseapp.com",
  projectId: "sdfdsfd",
  storageBucket: "dsfsdf.firebasestorage.app",
  messagingSenderId: "dsfdsfds",
  appId: "sdfdsfsdfdsf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
