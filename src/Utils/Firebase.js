import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "../Config/firebaseConfig";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
    this.auth = app.auth();
  }

  getUsers = () => this.db.collection("users").get();

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doSignUpWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  getIndividualUser = () => {
    const user = JSON.parse(localStorage.getItem("authUser")).uid;
    return this.db
      .collection("users")
      .doc(user)
      .get();
  };
}

export const firebase = new Firebase();
