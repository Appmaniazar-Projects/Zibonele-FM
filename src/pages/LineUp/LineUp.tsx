import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import AdBanner from '../../components/AdBanner/AdBanner';
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import { database } from "../../firebaseConfig";

type Show = {
  time: string;
  title: string;
  description: string;
};

type WeeklySchedule = {
  [day: string]: Show[];
};

const LineUp: React.FC = () => {
  const [schedule, setSchedule] = useState<WeeklySchedule>({});
  const [selectedDay, setSelectedDay] = useState<string>('mon');

  useEffect(() => {
    const scheduleRef = ref(database, "weeklySchedule");

    // ✅ Real-time listener setup
    const unsubscribe = onValue(scheduleRef, (snapshot) => {
      const data = snapshot.val();
      setSchedule(data || {});
    });

    // 🔚 Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const dayLabels: { [key: string]: string } = {
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun',
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <IonTitle class="title">Line Up</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="content">
        <IonSegment
          value={selectedDay}
          onIonChange={(e) => setSelectedDay(e.detail.value as string)}
          scrollable
        >
          {weekdays.map((day) => (
            <IonSegmentButton key={day} value={day}>
              <IonLabel>{dayLabels[day]}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>

        <div style={{ padding: "1rem" }}>
          {/* <h2>{dayLabels[selectedDay]} Line-Up</h2> */}
          {schedule[selectedDay]?.length > 0 ? (
            schedule[selectedDay].map((show: Show, index: number) => (
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardTitle>{show.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p><strong>Time:</strong> {show.time}</p>
                  <p>{show.description}</p>
                </IonCardContent>
              </IonCard>
            ))
          ) : (
            <p>Shows Loading... {dayLabels[selectedDay]}</p>
          )}
        </div>
      </IonContent>
      
      <AdBanner />
    </IonPage>
  );
};

export default LineUp;
