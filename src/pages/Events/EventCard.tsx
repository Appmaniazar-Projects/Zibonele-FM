// src/EventCard.tsx
import React from 'react';
import './Events.css';

interface EventCardProps {
    event: {
        title: string;
        date: string;
        location: string;
        description: string;
        imageUrl: string;
    };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.imageUrl} alt="Event" className="event-image" />
            <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-info">{event.date}</p>
                <p className="event-info">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <button className="rsvp-button">RSVP</button>
            </div>
        </div>
    );
};

export default EventCard;
