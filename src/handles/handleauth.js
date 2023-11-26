import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "@firebase/auth";
  import { addDoc, collection, getFirestore } from "@firebase/firestore";
  import { app } from "../config/firebase";


  const db = getFirestore(app);
  const auth = getAuth(app);

  export const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
      });
      return true
    } catch (error) {
      return {error: error.message}
    }
  };

  export const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return true
    } catch (error) {
      return {error: error.message}
    }
  };

  export const logOut = async() => {
    try {
      await signOut(auth)
      return true
    } catch (error) {
      return false
    }
  };
