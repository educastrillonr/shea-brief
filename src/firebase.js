import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Basic firebase configuration linking web application to database - see firebase documentation

const firebaseConfig = {
  apiKey: "AIzaSyA_ig8xsutBfuWgCzapoh_Sgrt4wJw7pxM",
  authDomain: "facebrief-3c010.firebaseapp.com",
  databaseURL: "https://facebrief-3c010.firebaseio.com",
  projectId: "facebrief-3c010",
  storageBucket: "",
  messagingSenderId: "1020460454587",
  appId: "1:1020460454587:web:2153ac37c96f8f89"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export default firebase;
