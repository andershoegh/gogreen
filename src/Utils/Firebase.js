import app from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../Config/firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }

  getData = () => this.db.collection('test-collection').get();
  
}
export const firebase = new Firebase()