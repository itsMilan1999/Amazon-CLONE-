import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCgmb7N9XSWOipoVn3PtEQ7HY-sLgFDIM4",
    authDomain: "fir-ea597.firebaseapp.com",
    databaseURL: "https://fir-ea597.firebaseio.com",
    projectId: "fir-ea597",
    storageBucket: "fir-ea597.appspot.com",
    messagingSenderId: "804798486721",
    appId: "1:804798486721:web:150eb6c279d9ad9c0c9c40",
    measurementId: "G-LZRSNF53WM"


})


const auth = firebase.auth();

export { auth };