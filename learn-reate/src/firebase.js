
import firebase from "firebase/app"
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAS8d5AQC9G8jKrejf-nkE-uknVVq5xkE",
  authDomain: "login-fec5b.firebaseapp.com",
  databaseURL: "https://login-fec5b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-fec5b",
  storageBucket: "login-fec5b.appspot.com",
  messagingSenderId: "686654313396",
  appId: "1:686654313396:web:ef775c7b0cbb7450a998e1",
  measurementId: "G-JKLQVJ4HQY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const database = app.database();

export { auth, database };