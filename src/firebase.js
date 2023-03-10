import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-YxmQgHCPzaDzcjqJA0abNYpNKTuOEtQ",
  authDomain: "netflix-clone-bcccb.firebaseapp.com",
  projectId: "netflix-clone-bcccb",
  storageBucket: "netflix-clone-bcccb.appspot.com",
  messagingSenderId: "985106154743",
  appId: "1:985106154743:web:644f4284e3a46d6f81fff2",
  measurementId: "G-6265CK50VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase auth instance
const auth = getAuth(app);

// Export the Firebase auth instance and GoogleAuthProvider as named exports
export { auth, GoogleAuthProvider };
