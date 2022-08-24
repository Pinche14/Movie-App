// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDEC3Yt6WPPtX9V0UgDkX4ItOD-T_TjYRY",
  authDomain: "netflix-react-clone-a4b65.firebaseapp.com",
  projectId: "netflix-react-clone-a4b65",
  storageBucket: "netflix-react-clone-a4b65.appspot.com",
  messagingSenderId: "1006508061064",
  appId: "1:1006508061064:web:85a893ae11cf5238524a3d",
  measurementId: "G-CF0BTNSSF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);