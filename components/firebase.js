import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIDaprylwOHheSTlQSGxofwnxpVM-Gd5k",
  authDomain: "gatesync-25810.firebaseapp.com",
  projectId: "gatesync-25810",
  storageBucket: "gatesync-25810.firebasestorage.app",
  messagingSenderId: "659285679162",
  appId: "1:659285679162:web:3523a135c82acedc172903",
  measurementId: "G-EFGGWTR6KS"
};

// Initialize Firebase
// Initialize Firebase only if it hasn't been initialized yet
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Firestore instance
export const db = getFirestore(app);

// Auth instance with persistence
export const auth = (() => {
  try {
    return initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    if (error.code === "auth/already-initialized") {
      return getAuth(app);
    } else {
      throw error;
    }
  }
})();