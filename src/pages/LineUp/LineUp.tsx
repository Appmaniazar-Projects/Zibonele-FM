// LineUp.tsx
import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { weeklySchedule, Day } from './data';
import DaySchedule from './DaySchedule';
import './LineUp.css';

const LineUp: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<Day>('mon');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='toolbar'>
                    <IonTitle className="title">LineUp</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className='content'>
                <div className="tabs-container">
                    <div className="tabs">
                        {Object.keys(weeklySchedule).map((day) => (
                            <div
                                key={day}
                                className={`tab ${selectedDay === day ? 'active' : ''}`}
                                data-day={day}
                                onClick={() => setSelectedDay(day as Day)}
                            >
                                {day.charAt(0).toUpperCase() + day.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="content">
                    {Object.keys(weeklySchedule).map((day) => (
                        <div
                            key={day}
                            className={`day-content ${selectedDay === day ? 'active' : ''}`}
                            id={day}
                        >
                            <div className="container">
                                <main className="row">
                                    <section className="col">
                                        <DaySchedule schedule={weeklySchedule[day as Day]} />
                                    </section>
                                </main>
                            </div>
                        </div>
                    ))}
                </div>
            </IonContent>
            <IonFooter>
                <IonToolbar className='footer'>
                    <IonTitle className="title">Advertise Here</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default LineUp;
