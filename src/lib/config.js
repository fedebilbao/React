// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEIHpNBwBsOyEQOqLlv85NRXxPnLTD5po",
  authDomain: "eventos-triton.firebaseapp.com",
  projectId: "eventos-triton",
  storageBucket: "eventos-triton.appspot.com",
  messagingSenderId: "621119425903",
  appId: "1:621119425903:web:ee6e32b4b3081badd0ec9a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);