import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBouDj7zHa3rTmkrlz4SUNCUyg2kmO-FLc",
  authDomain: "samsung-saviuors.firebaseapp.com",
  projectId: "samsung-saviuors",
  storageBucket: "samsung-saviuors.appspot.com",
  messagingSenderId: "403966037005",
  appId: "1:403966037005:web:46b2d808c37d8bae7a9944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
