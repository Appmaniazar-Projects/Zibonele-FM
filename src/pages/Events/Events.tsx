import { 
  IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Events.css'
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import EventCard from './EventCard';
import { events } from './event';
const Events: React.FC = () => {

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
        <IonFooter>
        <IonToolbar className='footer'>
          <IonTitle class="title">Advertise Here</IonTitle>
        </IonToolbar>
      </IonFooter>
      </IonPage>
  );
};

export default Events;