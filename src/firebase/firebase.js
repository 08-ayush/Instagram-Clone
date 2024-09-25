// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDJbfJfF9euhDzkWSr-bPMxwaZrmWIG9uo",
  authDomain: "insta-clone-e7c00.firebaseapp.com",
  projectId: "insta-clone-e7c00",
  storageBucket: "insta-clone-e7c00.appspot.com",
  messagingSenderId: "748928734007",
  appId: "1:748928734007:web:283a116c269a7770fac0b2",
  measurementId: "G-RE7XHMDN15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,auth,firestore,storage};