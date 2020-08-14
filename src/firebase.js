import firebase from "firebase";


 
    const firebaseConfig = {
        apiKey: "AIzaSyB757KvyXZnPba2FQF6JkU1bx1FFP3VJm0",
        authDomain: "slacky-bcde3.firebaseapp.com",
        databaseURL: "https://slacky-bcde3.firebaseio.com",
        projectId: "slacky-bcde3",
        storageBucket: "slacky-bcde3.appspot.com",
        messagingSenderId: "899862877905",
        appId: "1:899862877905:web:8b0b0a95708f66761357f0",
        measurementId: "G-5DJSQY4JJG"
      };


  const firebaseApp = firebase.initializeApp(firebaseConfig);  
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export{auth,provider};
  
  export default db;