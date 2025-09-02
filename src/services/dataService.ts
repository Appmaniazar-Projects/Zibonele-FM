// src/services/dataService.ts
import { child, get, onValue, ref } from "firebase/database";
import { Profile } from "../pages/Profiles/profile";
import { database } from '../firebaseConfig';


export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';


export const fetchProfiles = async () => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, 'profiles'));
  return snapshot.exists() ? snapshot.val() : [];
};


export const fetchEvents = async () => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, 'events'));
  const eventData = snapshot.exists() ? snapshot.val() : {};
  return Object.values(eventData); // Convert object to array
};


export const fetchSchedule = async () => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, 'weeklySchedule'));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    throw new Error('No schedule data found. Please check the database for updates.');
  }
};

// Real-time updates listener
export const setupRealtimeUpdates = (callback) => {
  const eventsRef = ref(database, 'events');
  return onValue(eventsRef, (snapshot) => {
    const eventData = snapshot.val() || {};
    callback(Object.values(eventData));
  });
};

/**
 * Fetches a single presenter's data by ID
 * @param id The ID of the presenter to fetch
 * @returns Promise with the presenter's data or null if not found
 */
export const getPresenterById = async (id: string): Promise<Profile | null> => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `profiles/${id}`));
    
    if (snapshot.exists()) {
      return { id, ...snapshot.val() };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching presenter:', error);
    throw error;
  }
};