import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDivmx17PIzXdfgrEFzCj9cb0qL4Lt-Ma0",
  authDomain: "fir-forumv.firebaseapp.com",
  projectId: "fir-forumv",
  storageBucket: "fir-forumv.appspot.com",
  messagingSenderId: "869865116002",
  appId: "1:869865116002:web:92210ed745daa0c1fadc3b",
  measurementId: "G-FB1S22RGX4"
};
// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
