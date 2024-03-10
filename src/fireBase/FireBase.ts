// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdPakLAiT5qD2nFLz0_VfPBZFECY-9qQM",
  authDomain: "netflix-clone-fe12b.firebaseapp.com",
  projectId: "netflix-clone-fe12b",
  storageBucket: "netflix-clone-fe12b.appspot.com",
  messagingSenderId: "385499939377",
  appId: "1:385499939377:web:9ec3daca93d9a1e6c64b10"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
