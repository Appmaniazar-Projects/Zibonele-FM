import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import { fetchProfiles } from '../../services/dataService';
import ProfileCard from './ProfileCard';
import { Profile } from './profile';

const Profiles: React.FC = () => {
  const [profileData, setProfileData] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profiles = await fetchProfiles();
        setProfileData(profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
    fetchData();
  }, []);

  const history = useHistory();

  const handleProfileClick = (profileId: string | number) => {
    history.push(`/presenters/${profileId}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <IonTitle class="title">Presenters</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" style={{
        '--background': '#1e1e1e',
        '--color': '#ffffff'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '10px 0'
        }}>
          {profileData.map((profile: Profile) => (
            <div 
              key={profile.id} 
              onClick={() => handleProfileClick(profile.id)}
              style={{ cursor: 'pointer' }}
            >
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profiles;
