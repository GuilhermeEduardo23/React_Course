import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpJboTAa_rmjSA6w_lKA_8spGYIj-WyHs",
  authDomain: "miniblog-daa11.firebaseapp.com",
  projectId: "miniblog-daa11",
  storageBucket: "miniblog-daa11.appspot.com",
  messagingSenderId: "731219930133",
  appId: "1:731219930133:web:5c7912b83602506d41321c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };