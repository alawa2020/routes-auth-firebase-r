import firebase from "firebase";
import 'firebase/auth'

    const firebaseConfig = {
        apiKey: "AIzaSyANL9h8Z7qQRlWZtMb1aqzNbpgYyKR8o-M",
        authDomain: "react-firebase-e4a97.firebaseapp.com",
        projectId: "react-firebase-e4a97",
        storageBucket: "react-firebase-e4a97.appspot.com",
        messagingSenderId: "499042498675",
        appId: "1:499042498675:web:6fdf11efbbd6e71d905206",
        measurementId: "G-TGLZE887GF"
      };
      // Initialize Firebase
    const fire = firebase.initializeApp(firebaseConfig);

    //for  me
    const auth = fire.auth();

    export {auth};
