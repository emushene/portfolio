import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-R9jMMpFBPQ-8vbuaG_ZlzqQhEYC5xHI",
  authDomain: "portfolio-177ac.firebaseapp.com",
  projectId: "portfolio-177ac",
  storageBucket: "portfolio-177ac.appspot.com",
  messagingSenderId: "281226752859",
  appId: "1:281226752859:web:3776f103f2eb2eedb3a07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const database = getDatabase(app);