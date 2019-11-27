import firebase from 'firebase/app';
//for the DB
import 'firebase/firestore';
import 'firebase/auth';

//CDN from project overview->settings on firebase website
const config = {
    apiKey: "AIzaSyAE0nFBFGHJuD__045me6f77vlpiZ7IPVw",
    authDomain: "web-store-d39b1.firebaseapp.com",
    databaseURL: "https://web-store-d39b1.firebaseio.com",
    projectId: "web-store-d39b1",
    storageBucket: "web-store-d39b1.appspot.com",
    messagingSenderId: "268811365674",
    appId: "1:268811365674:web:249de792c56c4c6b67c253",
    measurementId: "G-TDEV1LENGF"
};

firebase.initializeApp(config);

//for authentication by Google account
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;