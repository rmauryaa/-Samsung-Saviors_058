// src/services/authService.js
import { signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
import { doc, setDoc, getDocs, collection, query, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from './firebase';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);  // Set persistence to local
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

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

export const addTrip = async (date, tripDetails) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const dateRef = doc(db, 'users', user.uid, 'trips', date.toISOString());
  await setDoc(dateRef, {
    date: date.toISOString(),
    ...tripDetails
  });
};

export const getTrips = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const tripsQuery = query(collection(db, 'users', user.uid, 'trips'));
  const tripDocs = await getDocs(tripsQuery);

  return tripDocs.docs.map(doc => {
    const data = doc.data();
    return {
      ...data,
      date: new Date(data.date) // Ensure date is a Date object
    };
  });
};

export const updateTrip = async (date, tripDetails) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const dateRef = doc(db, 'users', user.uid, 'trips', date.toISOString());
  await updateDoc(dateRef, {
    ...tripDetails
  });
};

export const deleteTrip = async (date) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const dateRef = doc(db, 'users', user.uid, 'trips', date.toISOString());
  await deleteDoc(dateRef);
};
