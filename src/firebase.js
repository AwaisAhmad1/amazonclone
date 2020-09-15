import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvbzPlJUVlfpqe7_6obwrdB89837GxmQg",
  authDomain: "clone-byawais.firebaseapp.com",
  databaseURL: "https://clone-byawais.firebaseio.com",
  projectId: "clone-byawais",
  storageBucket: "clone-byawais.appspot.com",
  messagingSenderId: "657575593496",
  appId: "1:657575593496:web:014f9264dce2738999656d",
  measurementId: "G-2QEB241K7B"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
