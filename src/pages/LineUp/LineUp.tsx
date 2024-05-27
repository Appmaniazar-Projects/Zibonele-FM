import React, { useState, useEffect } from 'react';
import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { fetchSchedule, Day } from '../../services/dataService'; // Import your API function and Day type
import DaySchedule from './DaySchedule';
import './LineUp.css';

const LineUp: React.FC = () => {
    const [weeklySchedule, setWeeklySchedule] = useState<{ [key in Day]: { time: string; title: string; description: string; }[] }>({
      'mon': [],
      'tue': [],
      'wed': [],
      'thu': [],
      'fri': [],
      'sat': [],
      'sun': []
    });
    const [selectedDay, setSelectedDay] = useState<Day>('mon');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSchedule(); // Assuming fetchSchedule is an async function that fetches data from the API
                console.log('Fetched Data:', data); // Debugging line to check fetched data
                setWeeklySchedule(data);
            } catch (error) {
                console.error('Error fetching weekly schedule:', error);
            }
        };

        fetchData();
    }, []);

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
                    <div className={`day-content ${selectedDay}`}>
                        {/* <DaySchedule schedule={weeklySchedule[selectedDay]} /> */}
                        <div className="container">
                                <main className="row">
                                    <section className="col">
                                    <DaySchedule schedule={weeklySchedule[selectedDay]} />
                                    </section>
                                </main>
                            </div>
                    </div>
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
