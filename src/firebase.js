import firebase from "firebase"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCDhS8JRNG55OY18jGrnKWIDJaLxYzVfPw",
    authDomain: "messenger-7c3a7.firebaseapp.com",
    projectId: "messenger-7c3a7",
    storageBucket: "messenger-7c3a7.appspot.com",
    messagingSenderId: "409293398354",
    appId: "1:409293398354:web:b37290fd3fb8241f1bda8b",
    measurementId: "G-6GE1QM0BWM"
  });

const db = firebase.firestore();

export default db;