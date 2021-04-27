import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBMiORnKzNNSuEn3f7JRevSnSC4pTTQBog",
  authDomain: "clone-ce4ef.firebaseapp.com",
  projectId: "clone-ce4ef",
  storageBucket: "clone-ce4ef.appspot.com",
  messagingSenderId: "959256035190",
  appId: "1:959256035190:web:a42f52009a673c104dc457",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
