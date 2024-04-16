import * as firebase from 'firebase';

//if (!firebase.apps.length) {
 const config = {
    apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
  };
//}
const  app = firebase.initializeApp(config);
export const db = app.database();
