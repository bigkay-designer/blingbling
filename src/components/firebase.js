import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKhDV-0Qqcva0CVIGdvNKpDvPGT1G72_E",
    authDomain: "blingbling-b2ccb.firebaseapp.com",
    projectId: "blingbling-b2ccb",
    storageBucket: "blingbling-b2ccb.appspot.com",
    messagingSenderId: "100730503836",
    appId: "1:100730503836:web:f7f4a6d13412764a0fe359",
    measurementId: "G-TD7BZPKM8L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()

  export {db}