import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
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
      </IonLabel>
    </IonItem>
  );
};

export default ProfileCard;
