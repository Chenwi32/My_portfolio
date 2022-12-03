// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'



// TODO: Add SDKs for Firebase products that you want to use

import 'firebase/firestore'

import { getFirestore } from 'firebase/firestore'

import { getStorage } from 'firebase/storage'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB--MNd7vPokxhnUrqvR6MVu_F2s2g_Y20',
  authDomain: 'portfolio-cc5d2.firebaseapp.com',
  projectId: 'portfolio-cc5d2',
  storageBucket: 'portfolio-cc5d2.appspot.com',
  messagingSenderId: '608080165102',
  appId: '1:608080165102:web:5a84a50490b4c6b26adbff',
  measurementId: 'G-JDLNHRDNEJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

// Initializing the data base
export { db };

// Firebase storage reference
const storage = getStorage(app);
export default storage;