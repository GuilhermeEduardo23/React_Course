import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcPo5Cxv-QJJDSaVk0XpNpexeAGkby3rE",
  authDomain: "miniblog-19fa7.firebaseapp.com",
  projectId: "miniblog-19fa7",
  storageBucket: "miniblog-19fa7.appspot.com",
  messagingSenderId: "593666549730",
  appId: "1:593666549730:web:12ff5d2f3184a22e097bbb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };