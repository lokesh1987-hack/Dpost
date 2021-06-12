 import firebase from "firebase"
var firebaseconfig = {
    apiKey: "AIzaSyD4cpFzCkDZLn1QuPntI0ONb31WVbGsDdc",
    authDomain: "myfirstreact-55c97.firebaseapp.com",
    projectId: "myfirstreact-55c97",
    storageBucket: "myfirstreact-55c97.appspot.com",
    messagingSenderId: "902127224692",
    appId: "1:902127224692:web:d694af41085336ebf3ce21",
    measurementId: "G-4HHDD03YJY"
}

var fire = firebase.initializeApp(firebaseconfig);

// Retrive a data from firebase database

// export const auth = auth.firebase();
// export  const db = db.firebase();


export default fire;