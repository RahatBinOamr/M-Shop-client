// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAdL3nV0kuLgOLh6zP8AuJQmkIzPONaL4",
  authDomain: "used-phone-ee00b.firebaseapp.com",
  projectId: "used-phone-ee00b",
  storageBucket: "used-phone-ee00b.appspot.com",
  messagingSenderId: "651296924007",
  appId: "1:651296924007:web:0c2c872012917c83e1cfc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app