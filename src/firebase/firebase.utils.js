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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
