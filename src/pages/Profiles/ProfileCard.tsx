/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Profiles.css'; // Import your CSS file
import { Profile } from './profile'; // Import the Profile type from data.ts

interface ProfileCardProps {
    profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
    const { name, schedule, author, imageUrl } = profile;

    return (
        <div className="card">
            <img src={imageUrl} alt="Picture" className="profile-pic" />
            <div className="info">
                <h1 className="name">{name}</h1>
                <p className="schedule">{schedule}</p>
                <p className="author">{author}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
