// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB-isyBBi4QWzo2UB7D7zSahFapLDFipi4',
  authDomain: 'cashtex-eea9d.firebaseapp.com',
  projectId: 'cashtex-eea9d',
  storageBucket: 'cashtex-eea9d.appspot.com',
  messagingSenderId: '481398152181',
  appId: '1:481398152181:web:dcc5992a51aa0dbcf35ebc',
  measurementId: 'G-3PYKT65HQR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
