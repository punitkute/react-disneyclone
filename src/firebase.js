import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6vkw-P6TfqN4PFAP1L07AChg45um9hp4",
  authDomain: "disneyplus-clone-6cdd6.firebaseapp.com",
  projectId: "disneyplus-clone-6cdd6",
  storageBucket: "disneyplus-clone-6cdd6.appspot.com",
  messagingSenderId: "571855600653",
  appId: "1:571855600653:web:ee81e17ce617c57a7b6944",
  measurementId: "G-XB00BVRXVV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
