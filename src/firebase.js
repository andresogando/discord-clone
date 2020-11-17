import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDdbR9txiqAoJs5K0L6eh1DeGkwHNv71X8",
  authDomain: "discord-clone-2a9e8.firebaseapp.com",
  databaseURL: "https://discord-clone-2a9e8.firebaseio.com",
  projectId: "discord-clone-2a9e8",
  storageBucket: "discord-clone-2a9e8.appspot.com",
  messagingSenderId: "926283323541",
  appId: "1:926283323541:web:670d17f7fb6a707742639c",
  measurementId: "G-PE7NJHHW4J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
