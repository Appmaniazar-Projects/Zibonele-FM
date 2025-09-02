// Firebase AdMob configuration for web
// This file is used to configure AdMob for web platform

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

export const initializeFirebase = async () => {
  if (typeof window !== 'undefined') {
    const { initializeApp } = await import('firebase/app');
    const { getAnalytics } = await import('firebase/analytics');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // Initialize Analytics
    if (typeof window !== 'undefined') {
      getAnalytics(app);
    }
    
    return app;
  }
  return null;
};

// Initialize Firebase when this module is loaded
initializeFirebase().catch(console.error);
