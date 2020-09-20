 import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyDbDQr6M1dJeoLBARZXsDtBAao9DPDMFlc",
   authDomain: "todoapp-3964d.firebaseapp.com",
   databaseURL: "https://todoapp-3964d.firebaseio.com",
   projectId: "todoapp-3964d",
   storageBucket: "todoapp-3964d.appspot.com",
   messagingSenderId: "752032453454",
   appId: "1:752032453454:web:8fb4b5ce5b8a2af932c41f",
   measurementId: "G-KENZJ3ZG6T"
 });

 const db = firebaseApp.firestore();

 export default db;