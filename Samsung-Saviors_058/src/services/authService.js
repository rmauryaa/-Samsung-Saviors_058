import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from './firebase';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Debugging: Log user information
    console.log("User information: ", user);

    // Store user information in Firestore
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    });

    return user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const signOutFromGoogle = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out from Google", error);
    throw error;
  }
};
