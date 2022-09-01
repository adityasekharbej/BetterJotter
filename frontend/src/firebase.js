// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcjClZVnOEHMhCfxfll4Qfzb7UB6m2gpM",
    authDomain: "auth-4c193.firebaseapp.com",
    projectId: "auth-4c193",
    storageBucket: "auth-4c193.appspot.com",
    messagingSenderId: "571445304194",
    appId: "1:571445304194:web:0014bc363bbda70dffcd9b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
