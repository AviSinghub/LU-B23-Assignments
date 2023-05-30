// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKXBjWj6G4nTKsLcKd8Z_1FIpZRJfj5y0",
  authDomain: "netflix-app-12db6.firebaseapp.com",
  projectId: "netflix-app-12db6",
  storageBucket: "netflix-app-12db6.appspot.com",
  messagingSenderId: "278910477465",
  appId: "1:278910477465:web:18e2aff4be87b934370408",
  measurementId: "G-CT721H8P9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 
