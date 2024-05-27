import React from 'react';
import './Profiles.css'; // Import your CSS file
import { Profile } from './profile'; // Import the Profile type from data.ts

interface ProfileCardProps {
    profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
    return (
        <div className="card">
            <img src={profile.imageUrl} alt={profile.name} className="profile-pic" />
            
            <div className="info">
                <h1 className="name">{profile.name}</h1>
                <p className="schedule">{profile.schedule}</p>
                <p className="author">{profile.author}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
