import { 
  IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Events.css'
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import EventCard from './EventCard';
import { fetchEvents } from '../../services/dataService';
import AdBanner from '../../components/AdBanner/AdBanner';

const Events: React.FC = () => {

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const eventsData = await fetchEvents();
              setEvents(eventsData || []);
          } catch (error) {
              console.error("Error fetching events:", error);
          }
      };

      fetchData();
  }, []);

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar className="toolbar">
            <IonTitle class="title">Events</IonTitle>
            <IonButtons slot="end">
              <NavButtons />
            </IonButtons>
            <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="content" >
        <input type="text" placeholder="Search events..." className="search-bar" />
          {/* Start here */}
          <div className="event-container">
            
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
          {/* End here */}
        </IonContent>
        <AdBanner />
      </IonPage>
  );
};

export default Events;