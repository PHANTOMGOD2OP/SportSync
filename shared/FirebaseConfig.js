// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASe_API,
  authDomain: "ninja-player-54cda.firebaseapp.com",
  projectId: "ninja-player-54cda",
  storageBucket: "ninja-player-54cda.appspot.com",
  messagingSenderId: "1060564296093",
  appId: "1:1060564296093:web:b849e5f0a4927372ce8f74",
  measurementId: "G-QEVMEKM6NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);