import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXIMNYzDKEyr0GKODiDWqHlR-HTkyozpQ",
  authDomain: "tp-final-coder.firebaseapp.com",
  projectId: "tp-final-coder",
  storageBucket: "tp-final-coder.appspot.com",
  messagingSenderId: "113993999385",
  appId: "1:113993999385:web:dde5179672cdb1f0dc3688"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);