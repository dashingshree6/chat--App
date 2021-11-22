import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBj23dqhCOwrDKVB8wOMB8vLWMEewD-uI8",
  authDomain: "chat-app-ed351.firebaseapp.com",
  projectId: "chat-app-ed351",
  storageBucket: "chat-app-ed351.appspot.com",
  messagingSenderId: "424886009501",
  appId: "1:424886009501:web:d453aa28ea7d5c12019e74",
  measurementId: "G-4Q8CRB2NPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
