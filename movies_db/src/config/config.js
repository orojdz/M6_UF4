// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcbSW_WdcmgzOdNNmN93CQrL3qWUwzf1E",
  authDomain: "movies-db-1d053.firebaseapp.com",
  projectId: "movies-db-1d053",
  storageBucket: "movies-db-1d053.appspot.com",
  messagingSenderId: "948666222158",
  appId: "1:948666222158:web:9c361e05e511dd8d30251f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;