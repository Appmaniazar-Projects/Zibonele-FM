// src/firebaseConfig.ts
// Import the compat version of Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5b1o1XFSe6y5fZBmla6Kqpg4oIsWB_mU",
    authDomain: "zibonele-fm-app.firebaseapp.com",
    databaseURL: "https://zibonele-fm-app-default-rtdb.firebaseio.com",
    projectId: "zibonele-fm-app",
    storageBucket: "zibonele-fm-app.appspot.com",
    messagingSenderId: "230511749503",
    appId: "1:230511749503:web:b3309f0c2aed66ea43924a",
    measurementId: "G-MSRZRH1914"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// Firebase services are already initialized above

// Function to get a download URL for a storage path
const getImageUrl = async (path: string): Promise<string | null> => {
  try {
    // Using the compat storage reference
    const imageRef = storage.ref(path);
    return await imageRef.getDownloadURL();
  } catch (error) {
    console.error('Error getting image URL:', error);
    return null;
  }
};

export { app, auth, database, storage, getImageUrl };

