import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './SignIn';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBrRa6ZyKTrCbeJ5-pvTkyacZiCMy88A_o",
    authDomain: "ecommbuilder-b5e49.firebaseapp.com",
    projectId: "ecommbuilder-b5e49",
    storageBucket: "ecommbuilder-b5e49.appspot.com",
    messagingSenderId: "981704972484",
    appId: "1:981704972484:web:d3d5093b1259ad58fcd191",
    measurementId: "G-PNP5Z0YVQZ"
});

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
