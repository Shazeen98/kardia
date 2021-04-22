import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyDfw3eCe-9mLKirhll5IbDxfKY0sxmq8zg",
    authDomain: "kardia-35c74.firebaseapp.com",
    projectId: "kardia-35c74",
    storageBucket: "kardia-35c74.appspot.com",
    messagingSenderId: "513490409526",
    appId: "1:513490409526:web:f5e14c903211eb47406097",
    measurementId: "G-QFXLKXZDQM"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
