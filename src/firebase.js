import app from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = app.initializeApp({
  apiKey: "AIzaSyC8wSLlnm_gjgEGgnpPQo8xr2adKIkRi94",
  authDomain: "messenger-clone-fbf65.firebaseapp.com",
  databaseURL: "https://messenger-clone-fbf65.firebaseio.com",
  projectId: "messenger-clone-fbf65",
  storageBucket: "messenger-clone-fbf65.appspot.com",
  messagingSenderId: "198594926559",
  appId: "1:198594926559:web:08769bac4886485c36566a",
  measurementId: "G-GJ86CLG4LK",
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
export { db, storage };
