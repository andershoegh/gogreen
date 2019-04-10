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

  getData = () => this.db.collection("test-collection").get();

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  trackAuthStatus = callback => this.auth.onAuthStateChanged(callback);
}
export const firebase = new Firebase();
