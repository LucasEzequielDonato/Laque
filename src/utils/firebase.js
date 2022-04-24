// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvjBqYYNsq0-LO41xPNiwWDkVblMtbKNY",
  authDomain: "laque-4739a.firebaseapp.com",
  projectId: "laque-4739a",
  storageBucket: "laque-4739a.appspot.com",
  messagingSenderId: "1034401651370",
  appId: "1:1034401651370:web:3ab99dd80a0fb6557c8ed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;