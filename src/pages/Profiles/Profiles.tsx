import {  IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// import './Profiles.css'
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import ProfileCard from './ProfileCard';
import { Profile } from './profile'; // Import the Profile type from data.ts
import profileData from './profile'; // Import the profile data

const Profiles: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <IonTitle class="title">DJ Profiles</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className='content'>
      {/* Start here */}
        <div className="card-container">
          {profileData.map((profile: Profile) => (
            <ProfileCard key={profile.id} profile={profile} />
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

export default Profiles;