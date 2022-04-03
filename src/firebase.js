import{ getAuth } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT5vgs_mbrSbBRIO8EFKR_nwMEiF_QJ-c",
  authDomain: "test-dce68.firebaseapp.com",
  projectId: "test-dce68",
  storageBucket: "test-dce68.appspot.com",
  messagingSenderId: "250558196751",
  appId: "1:250558196751:web:d95927ce623a17a3f1477a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
