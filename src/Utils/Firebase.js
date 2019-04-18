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

  getUsers = () => this.db.collection("test-collection").get();

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  getIndividualUser = () => {
    const user = JSON.parse(localStorage.getItem("authUser")).uid;
    return this.db
      .collection("test-collection")
      .doc(user)
      .get();
  };
}
/*.then(doc => {
          const greenEnergy =
            (doc.data().totalGreenEnergy / doc.data().totalEnergy) * 100;
          const totalEnergy = 100 - greenEnergy;

          const array = [greenEnergy, totalEnergy];

          return { green: greenEnergy, total: totalEnergy };
        }); */
export const firebase = new Firebase();
