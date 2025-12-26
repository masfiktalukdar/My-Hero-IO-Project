// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyBetZkU_VtgA9y8cASnL4B8t5mUI0547pY",
  authDomain: "hero-io-7e0e0.firebaseapp.com",
  projectId: "hero-io-7e0e0",
  storageBucket: "hero-io-7e0e0.firebasestorage.app",
  messagingSenderId: "289602348354",
  appId: "1:289602348354:web:6a7af9be97d880759454db",
  measurementId: "G-EKJRBZSWR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
