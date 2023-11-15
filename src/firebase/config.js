import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDhcA8K9Thx21eeb59iHP4w5CNUjmoYaMI",
  authDomain: "react-study-de6ff.firebaseapp.com",
  projectId: "react-study-de6ff",
  storageBucket: "react-study-de6ff.appspot.com",
  messagingSenderId: "1052199603933",
  appId: "1:1052199603933:web:3b04235ac9a6fef3105534"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );