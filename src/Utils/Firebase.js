import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "../Config/firebaseConfig";
import moment from "moment";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
    this.auth = app.auth();
  }

  getRealtime = () => this.db.collection("users");

  getUsers = () => this.db.collection("users").get();

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  getTimeStamp = () => {
    const timeStamp = new app.firestore.Timestamp.fromDate(
      new Date(
        moment("2010-01-01 00:00:00", "YYYY-MM-DD HH:mm:SS").format(
          "YYYY-MM-DDTHH:mm:SS"
        )
      )
    );

    return timeStamp;
  };

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
