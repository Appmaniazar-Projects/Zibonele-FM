import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonLoading,
  IonAlert
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPresenterById } from '../../services/dataService';
import { Profile } from '../Profiles/profile';

const PresenterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [presenter, setPresenter] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPresenter = async () => {
      try {
        if (!id) return;
        const data = await getPresenterById(id);
        setPresenter(data);
      } catch (err) {
        console.error('Error loading presenter:', err);
        setError('Failed to load presenter details');
      } finally {
        setLoading(false);
      }
    };

    loadPresenter();
  }, [id]);

  if (loading) {
    return (
      <IonLoading
        isOpen={true}
        message="Loading presenter details..."
      />
    );
  }

  if (error || !presenter) {
    return (
      <IonAlert
        isOpen={true}
        header="Error"
        message={error || 'Presenter not found'}
        buttons={[
          {
            text: 'Go Back',
            handler: () => history.goBack()
          }
        ]}
      />
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profiles" />
          </IonButtons>
          <IonTitle>Presenter Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonImg 
            src={presenter.imageUrl} 
            alt={presenter.name} 
            className="presenter-image"
          />
          <IonCardHeader>
            <IonCardTitle>{presenter.name}</IonCardTitle>
            <IonCardSubtitle>{presenter.role || 'Presenter'}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <h3>About</h3>
            <p>{presenter.bio || 'No biography available.'}</p>
            
            {presenter.socialMedia && (
              <div className="social-links">
                <h4>Connect</h4>
                {presenter.socialMedia.twitter && (
                  <a href={presenter.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                )}
                {presenter.socialMedia.facebook && (
                  <a href={presenter.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                )}
                {presenter.socialMedia.instagram && (
                  <a href={presenter.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                )}
              </div>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PresenterDetail;
