import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA557rvEC1vjNAHiskel9OR43UyVW9ru5I",
  authDomain: "connectu-development.firebaseapp.com",
  databaseURL: "https://connectu-development-default-rtdb.firebaseio.com",
  projectId: "connectu-development",
  storageBucket: "connectu-development.appspot.com",
  messagingSenderId: "720299862034",
  appId: "1:720299862034:web:f0c1b712677d55b29dd0cb"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
