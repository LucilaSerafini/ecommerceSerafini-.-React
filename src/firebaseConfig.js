import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCljx8z68hjZQVmV4yFvfYYPJpASHJSJw",
  authDomain: "terraflorens-19ac6.firebaseapp.com",
  projectId: "terraflorens-19ac6",
  storageBucket: "terraflorens-19ac6.appspot.com",
  messagingSenderId: "93489229660",
  appId: "1:93489229660:web:dbfbd908c7bea005f01b99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//obtener la base de datos y poder importarla en los componentes que se requiera.
export const db = getFirestore(app);
