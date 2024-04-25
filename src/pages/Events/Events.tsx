import {  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Events.css'
import { NavButtons } from '../../components/Navbuttons/Navbuttons';

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
        <IonContent className="content" fullscreen>
          <IonCard  className='MyCard'>
            <IonCardHeader>
              <IonCardTitle>Business Breakfast </IonCardTitle>
              <IonCardSubtitle>June 2022</IonCardSubtitle>
            </IonCardHeader>
           
            <IonCardContent>
             A business Breakfast event for local businesses to network.
            </IonCardContent>
          </IonCard>
  
          <IonCard className='MyCard'>
            <IonCardHeader>
              <IonCardTitle>Roadshows</IonCardTitle>
              <IonCardSubtitle>August - November 2022</IonCardSubtitle>
            </IonCardHeader>
  
            <IonCardContent>
              Scheduled roadshows around the Cape Metro.
            </IonCardContent>
          </IonCard>
  
          <IonCard className='MyCard'>
            <IonCardHeader>
              <IonCardTitle>Women's Day</IonCardTitle>
              <IonCardSubtitle>August 2022</IonCardSubtitle>
            </IonCardHeader>
  
            <IonCardContent>
              An Event celebration the social, economic, cultural and political
              achievements of all women.
            </IonCardContent>
          </IonCard>
  
          <IonCard className='MyCard'>
            <IonCardHeader>
              <IonCardTitle>Heritage Day</IonCardTitle>
              <IonCardSubtitle>September 2022</IonCardSubtitle>
            </IonCardHeader>
  
            <IonCardContent>
              A Cultural event celebrating the cultural wealth of our Nation.
            </IonCardContent>
          </IonCard>
  
          <IonCard className='MyCard'>
            <IonCardHeader>
              <IonCardTitle>Gqom Explosion</IonCardTitle>
              <IonCardSubtitle> October 2022</IonCardSubtitle>
            </IonCardHeader>
  
            <IonCardContent>
              An Event hard hitting powerful collection of South African electronic dance music.
        
            </IonCardContent>
          </IonCard>
  
          <IonCard className='MyCard'>
            <IonCardHeader>
              <IonCardTitle> Year End Function </IonCardTitle>
              <IonCardSubtitle> December 2022</IonCardSubtitle>
            </IonCardHeader>
  
            <IonCardContent>
              An Event to mark the end of the year.
            </IonCardContent>
          </IonCard>
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