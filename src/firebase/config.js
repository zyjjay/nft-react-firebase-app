// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzQrfmziUM6D-9MlqQe4Oql05Z1McBQ0c",
    authDomain: "nft-tracker-2cce7.firebaseapp.com",
    projectId: "nft-tracker-2cce7",
    storageBucket: "nft-tracker-2cce7.appspot.com",
    messagingSenderId: "1083245274319",
    appId: "1:1083245274319:web:010b1ae5c06abd872f43ba"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp }