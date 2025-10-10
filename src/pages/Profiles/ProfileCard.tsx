import { IonAvatar, IonItem, IonLabel, IonIcon } from '@ionic/react';
import React from 'react';
import { logoFacebook, logoTwitter, logoInstagram, logoYoutube } from 'ionicons/icons';
import './ProfileCard.css';
import { Profile } from './profile';
import defaultAvatar from '../../assets/images/default-avatar.svg';

interface Props {
  profile: Profile;
}

const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <IonItem lines="full" className="profile-card">
      <IonAvatar slot="start" className="profile-avatar">
        <img 
          src={profile.imageUrl || defaultAvatar} 
          alt={profile.name} 
          onError={(e) => {
            // If the image fails to load, use the default avatar
            const target = e.target as HTMLImageElement;
            target.src = defaultAvatar;
          }}
        />
      </IonAvatar>
      <IonLabel className="profile-label">
        <h2 className="profile-name">
          {profile.name}
          {profile.role && <span className="profile-role">{profile.role}</span>}
        </h2>
        <p className="profile-schedule">{profile.schedule}</p>
        {profile.socialMedia && (
          <div className="social-media-icons">
            {profile.socialMedia.facebook && (
              <a href={profile.socialMedia.facebook} target="_blank" rel="noopener noreferrer" key="facebook">
                <IonIcon icon={logoFacebook} className="social-icon" />
              </a>
            )}
            {profile.socialMedia.twitter && (
              <a href={profile.socialMedia.twitter} target="_blank" rel="noopener noreferrer" key="twitter">
                <IonIcon icon={logoTwitter} className="social-icon" />
              </a>
            )}
            {profile.socialMedia.instagram && (
              <a href={profile.socialMedia.instagram} target="_blank" rel="noopener noreferrer" key="instagram">
                <IonIcon icon={logoInstagram} className="social-icon" />
              </a>
            )}
            {profile.socialMedia.youtube && (
              <a href={profile.socialMedia.youtube} target="_blank" rel="noopener noreferrer" key="youtube">
                <IonIcon icon={logoYoutube} className="social-icon" />
              </a>
            )}
          </div>
        )}
      </IonLabel>
    </IonItem>
  );
};

export default ProfileCard;
