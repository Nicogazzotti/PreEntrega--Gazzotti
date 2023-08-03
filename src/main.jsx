import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlTfB7221TRblNsq9U3Iy11_gjGXX_aF4",
  authDomain: "react-proyect-10316.firebaseapp.com",
  projectId: "react-proyect-10316",
  storageBucket: "react-proyect-10316.appspot.com",
  messagingSenderId: "790072560820",
  appId: "1:790072560820:web:3f791d1c7197e760759be1"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
