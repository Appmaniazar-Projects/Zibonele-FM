import React, { useEffect, useState } from "react";
import { ref, onValue, DataSnapshot, get } from "firebase/database";
import { database } from "../../firebaseConfig";
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  IonSpinner,
} from '@ionic/react';
import './LineUp.css';

type Show = {
  time: string;
  title: string;
  description?: string;
  presenter?: string;
  isActive?: boolean;
};

type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

type WeeklySchedule = {
  [day in DayKey]?: {
    [key: string]: Show;
  };
};

const LineUp: React.FC = () => {
  const [schedule, setSchedule] = useState<WeeklySchedule>({});
  const [selectedDay, setSelectedDay] = useState<DayKey>('mon');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  console.log("Component mounted - setting up Firebase listener");
  
  const fetchSchedule = async () => {
    try {
      const scheduleRef = ref(database, "weeklySchedule");
      console.log("Firebase ref created:", scheduleRef.toString());

      // Test connection with direct get
      try {
        const snapshot = await get(scheduleRef);
        console.log("Direct get result:", snapshot.exists() ? "Data exists" : "No data");
      } catch (getError) {
        const error = getError as Error;
        console.error("Direct get failed:", error);
        setError(`Failed to load schedule: ${error.message}`);
      }

      let unsubscribe: () => void;

      try {
        unsubscribe = onValue(
          scheduleRef,
          (snapshot: DataSnapshot) => {
            console.log("onValue callback triggered");
            const data = snapshot.val();
            console.log("Data received:", data);
            setSchedule(data || {});
            setIsLoading(false);
          },
          (error: Error) => {
            console.error("Firebase onValue error:", error);
            setError(`Error loading schedule: ${error.message}`);
            setIsLoading(false);
          }
        );
      } catch (error) {
        console.error("Error setting up listener:", error);
        setError("Failed to set up schedule listener");
        setIsLoading(false);
        return; // Return early if we can't set up the listener
      }

      // Return the cleanup function directly
      return () => {
        console.log("Cleaning up Firebase listener");
        if (unsubscribe) {
          unsubscribe();
        }
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.error("Error in fetchSchedule:", error);
      setError(`Failed to initialize: ${errorMessage}`);
      setIsLoading(false);
    }
  };

  // Call fetchSchedule and handle its cleanup
  const cleanupPromise = fetchSchedule();
  return () => {
    if (cleanupPromise) {
      cleanupPromise.then(cleanup => {
        if (cleanup) cleanup();
      }).catch(error => {
        console.error("Error during cleanup:", error);
      });
    }
  };
}, []);

  const weekdays: DayKey[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  
  const dayLabels: Record<DayKey, string> = {
    mon: 'Mon', 
    tue: 'Tue', 
    wed: 'Wed', 
    thu: 'Thu',
    fri: 'Fri', 
    sat: 'Sat', 
    sun: 'Sun'
  };

  const getShowsForDay = (day: DayKey) => {
    const dayShows = schedule[day] || {};
    return Object.entries(dayShows)
      .map(([id, show]) => ({ id, ...show }))
      .sort((a, b) => a.time.localeCompare(b.time));
  };

  const handleSegmentChange = (e: CustomEvent) => {
    setSelectedDay(e.detail.value as DayKey);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="lineup-header" mode="ios">
          <IonTitle>Line Up</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSegment
          value={selectedDay}
          onIonChange={handleSegmentChange}
          scrollable
        >
          {weekdays.map(day => (
            <IonSegmentButton key={day} value={day}>
              <IonLabel>{dayLabels[day]}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>

        <div className="ion-padding">
          {error ? (
            <div className="error-message">{error}</div>
          ) : isLoading ? (
            <div className="ion-text-center ion-padding">
              <IonSpinner />
              <p>Loading shows for {dayLabels[selectedDay]}...</p>
            </div>
          ) : (
            getShowsForDay(selectedDay).length > 0 ? (
              getShowsForDay(selectedDay).map(show => (
                <IonCard key={show.id}>
                  <IonCardHeader>
                    <IonCardTitle>{show.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p><strong>Time:</strong> {show.time}</p>
                    {show.presenter && <p><strong>Presenter:</strong> {show.presenter}</p>}
                    {show.description && <p>{show.description}</p>}
                  </IonCardContent>
                </IonCard>
              ))
            ) : (
              <p>No shows scheduled for {dayLabels[selectedDay]}</p>
            )
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LineUp;