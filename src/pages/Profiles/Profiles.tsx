import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import { fetchProfiles } from '../../services/dataService';
import ProfileCard from './ProfileCard';
import { Profile } from './profile';

const Profiles: React.FC = () => {
  const [profileData, setProfileData] = useState<Profile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const profiles = await fetchProfiles();
        console.log('Fetched profiles:', profiles);
        setProfileData(Array.isArray(profiles) ? profiles : []);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setError("Failed to load presenters. Please try again later.");
      } finally {
        setLoading(false);
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
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <IonSpinner name="crescent" />
              <p>Loading presenters...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
              <p>{error}</p>
            </div>
          ) : profileData.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>No presenters found.</p>
            </div>
          ) : (
            profileData.map((profile: Profile) => (
              <div 
                key={profile.id} 
                onClick={() => handleProfileClick(profile.id)}
                style={{ cursor: 'pointer' }}
              >
                <ProfileCard profile={profile} />
              </div>
            ))
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profiles;
