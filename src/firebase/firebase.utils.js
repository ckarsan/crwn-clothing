import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDCHtv6FtVd4FdOJ2HApWyjouiGlWl-Ibk",
  authDomain: "crwn-db-chet.firebaseapp.com",
  databaseURL: "https://crwn-db-chet.firebaseio.com",
  projectId: "crwn-db-chet",
  storageBucket: "crwn-db-chet.appspot.com",
  messagingSenderId: "826894157562",
  appId: "1:826894157562:web:d0b96c7449450eaecfab43"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
