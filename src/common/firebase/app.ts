// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDneU38dQ9qKqrdif1XqmYhvDYyzEdu_-8",
  authDomain: "dino-site.firebaseapp.com",
  projectId: "dino-site",
  storageBucket: "dino-site.appspot.com",
  messagingSenderId: "487361359672",
  appId: "1:487361359672:web:a9e2d7b27c994c1c95dbcd",
  measurementId: "G-Y973DH4296",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
