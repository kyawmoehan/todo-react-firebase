import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYoIk_7vFV1DIXbGQhOEVxMRRCpSiv49A",
  authDomain: "todo-firebase-2aaa5.firebaseapp.com",
  databaseURL: "https://todo-firebase-2aaa5.firebaseio.com",
  projectId: "todo-firebase-2aaa5",
  storageBucket: "todo-firebase-2aaa5.appspot.com",
  messagingSenderId: "123311458763",
  appId: "1:123311458763:web:a3ca0ecca63e9fde3e4e4e",
  measurementId: "G-X0T6MY3DQ2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
