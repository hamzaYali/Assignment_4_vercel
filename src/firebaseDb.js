import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_RR6R0LklzmlsHOV3qUdqI3hYg1QPrm8",
  authDomain: "quasartodolist-917b7.firebaseapp.com",
  projectId: "quasartodolist-917b7",
  storageBucket: "quasartodolist-917b7.firebasestorage.app",
  messagingSenderId: "487349553107",
  appId: "1:487349553107:web:1f541bd11646956896d126"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db;

