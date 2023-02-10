// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnB7hoq_JjgEItZymJCNrugj-SM8Ad8lw",
  authDomain: "thogtschool-4158e.firebaseapp.com",
  projectId: "thogtschool-4158e",
  storageBucket: "thogtschool-4158e.appspot.com",
  messagingSenderId: "668702617715",
  appId: "1:668702617715:web:9359d5f8333769c12f7a06",
  measurementId: "G-7K6ZNWYCNL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
