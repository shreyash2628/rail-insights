// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp1L8RaB2FPl9SwWJsm-rj2P6dsJbUNoE",
  authDomain: "rail-insights-e4c8e.firebaseapp.com",
  projectId: "rail-insights-e4c8e",
  storageBucket: "rail-insights-e4c8e.appspot.com",
  messagingSenderId: "453242459017",
  appId: "1:453242459017:web:b119b1d6e744a0ea38c758",
  measurementId: "G-4K1KP66PWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);