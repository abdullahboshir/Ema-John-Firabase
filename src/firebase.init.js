// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIziR5RVKkKSo9dONcHokE8ASK-pksOIc",
  authDomain: "ema-john-simple-bde29.firebaseapp.com",
  projectId: "ema-john-simple-bde29",
  storageBucket: "ema-john-simple-bde29.appspot.com",
  messagingSenderId: "634021252194",
  appId: "1:634021252194:web:a106da2efa38ba2372153b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;