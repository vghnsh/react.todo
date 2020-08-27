import firebase from 'firebase';


const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyCvRBtncYEiurt2Cducl6E6jb2twko-Zj8",
    authDomain: "todo-394bf.firebaseapp.com",
    databaseURL: "https://todo-394bf.firebaseio.com",
    projectId: "todo-394bf",
    storageBucket: "todo-394bf.appspot.com",
    messagingSenderId: "469224473173",
    appId: "1:469224473173:web:5fd49d70ed401d49d2cadc",
    measurementId: "G-91ZJBQHQ8P"

  });

const db= firebaseApp.firestore();



  
  
  
export default db;

