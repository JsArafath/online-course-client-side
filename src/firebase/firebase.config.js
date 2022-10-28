// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6bZfTfyMSdmjXxjWq42Kvd7d9E8Ax14o",
  authDomain: "training-tutor.firebaseapp.com",
  projectId: "training-tutor",
  storageBucket: "training-tutor.appspot.com",
  messagingSenderId: "742840793097",
  appId: "1:742840793097:web:5bcc2bab0e95dd12bd60d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;