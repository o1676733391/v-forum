import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken } from "firebase/messaging";

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
// const messaging = getMessaging(app);
// getToken(messaging, {vapidKey: "BPwLKX1hCP1Ulr6x2_WDQfoDgawcYCrEuWBsSYoezZJ85hwf7zv-dEhLrySkTqXyuRkN9RhX-HR1_Pd_nXQm7t8"})

export { app, auth, firestore, storage};
