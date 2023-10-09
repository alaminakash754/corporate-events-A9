// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8d3BDE_9s0YJStTy1v-CkupbK8oSoCPk",
  authDomain: "react-corporate-events.firebaseapp.com",
  projectId: "react-corporate-events",
  storageBucket: "react-corporate-events.appspot.com",
  messagingSenderId: "686970487755",
  appId: "1:686970487755:web:c6533fcf7a08694ee06c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;