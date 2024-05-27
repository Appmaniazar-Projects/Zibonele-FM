// src/services/dataService.js
import { getDatabase, ref, set, get, child  } from "firebase/database";
import { database } from "../firebaseConfig";
// import { database } from "../firebaseConfig";


export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';


export const uploadProfiles = (profiles) => {
  profiles.forEach(profile => {
    const profileRef = ref(database, `profiles/${profile.id}`);
    set(profileRef, profile);
  });
};

export const uploadEvents = (events) => {
  events.forEach(event => {
    const eventRef = ref(database, `events/${event.title}`);
    set(eventRef, event);
  });
};

export const uploadSchedule = (schedule) => {
  const scheduleRef = ref(database, 'weeklySchedule');
  set(scheduleRef, schedule);
};

export const fetchProfiles = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'profiles'));
  return snapshot.exists() ? snapshot.val() : [];
};

export const fetchEvents = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'events'));
  return snapshot.exists() ? snapshot.val() : [];
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