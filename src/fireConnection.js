import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


    let firebaseConfig = {
        apiKey: "AIzaSyDjY6P4aurCGElT22jrvTJjhJBLaeb4uf4",
        authDomain: "reactapp-e7964.firebaseapp.com",
        databaseURL: "https://reactapp-e7964.firebaseio.com",
        projectId: "reactapp-e7964",
        storageBucket: "",
        messagingSenderId: "146945053248",
        appId: "1:146945053248:web:d8599beb09b22424"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


export default firebase;