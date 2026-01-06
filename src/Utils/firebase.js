// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAZ9xeqpRjVS2XHfX0FR_67TSW8rz1-zk",
  authDomain: "netflix-gpt2-41db9.firebaseapp.com",
  projectId: "netflix-gpt2-41db9",
  storageBucket: "netflix-gpt2-41db9.firebasestorage.app",
  messagingSenderId: "362158244470",
  appId: "1:362158244470:web:fdf63186d51dddfedd5557",
  measurementId: "G-G9MGHLQMJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export const auth = getAuth();