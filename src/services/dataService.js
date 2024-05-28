// src/services/dataService.js
import { getDatabase, ref, set, get, child  } from "firebase/database";
import { database } from "../firebaseConfig";
// import { database } from "../firebaseConfig";


export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';


export const fetchProfiles = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'profiles'));
  return snapshot.exists() ? snapshot.val() : [];
};

export const fetchEvents = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'events'));
  const eventData = snapshot.exists() ? snapshot.val() : {};
  return Object.values(eventData); // Convert object to array
};


export const fetchSchedule = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'weeklySchedule'));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return {}; // Return an empty object if no data is found
  }
};