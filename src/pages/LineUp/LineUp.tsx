import React, { useEffect } from 'react';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './LineUp.css'; 

const LineUp: React.FC = () => {

  useEffect(() => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.day-content');

    function showContentForDay(day: string) {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        document.querySelector(`.tab[data-day="${day}"]`)?.classList.add('active');
        document.getElementById(day)?.classList.add('active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const day = tab.getAttribute('data-day');
            if (day) {
                showContentForDay(day);
            }
        });
    });

    showContentForDay('mon');

    // Cleanup event listeners on component unmount
    return () => {
        tabs.forEach(tab => {
            tab.removeEventListener('click', () => {
                const day = tab.getAttribute('data-day');
                if (day) {
                    showContentForDay(day);
                }
            });
        });
    };
}, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <IonTitle class="title">LineUp</IonTitle>
          
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content'>
        {/* New layout for line up */}
        <div className="tabs-container">
                <div className="tabs">
                    <div className="tab" data-day="mon">Monday</div>
                    <div className="tab" data-day="tue">Tuesday</div>
                    <div className="tab" data-day="wed">Wednesday</div>
                    <div className="tab" data-day="thu">Thu</div>
                    <div className="tab" data-day="fri">Fri</div>
                    <div className="tab" data-day="sat">Sat</div>
                    <div className="tab" data-day="sun">Sun</div>
                </div>
        </div>
            <div className="content">
                <div className="day-content" id="mon">
                    <div className="container">
                        <main className="row">
                            <section className="col">
                                <div className="contents">
                                    <div className="box">
                                        <h4>00:00 - 03:00</h4>
                                        <h3>Ezidla Umzi</h3>
                                        {/* <p>A show by Lenny Makhasi where people voice out their family problems</p> */}
                                        <p>Lenny Makhasi</p>
                                    </div>
                                    <div className="box">
                                        <h4>03:00 - 04:50</h4>
                                        <h3>Itshayile</h3>
                                        <p>Sisipho Geni </p>
                                    </div>
                                    <div className="box">
                                        <h4>04:50 - 05:00</h4>
                                        <h3>Umyalezo Wosuku</h3>
                                        <p>Rev Cebisile Vellem</p>
                                    </div>
                                    <div className="box">
                                        <h4>04:50 - 05:00</h4>
                                        <h3>Umyalezo Wosuku</h3>
                                        <p>Rev Cebisile Vellem</p>
                                    </div>
                                    <div className="box">
                                        <h4>04:50 - 05:00</h4>
                                        <h3>Umyalezo Wosuku</h3>
                                        <p>Rev Cebisile Vellem</p>
                                    </div>
                                    <div className="box">
                                        <h4>04:50 - 05:00</h4>
                                        <h3>Umyalezo Wosuku</h3>
                                        <p>Rev Cebisile Vellem</p>
                                    </div>
                                    <div className="box">
                                        <h4>04:50 - 05:00</h4>
                                        <h3>Umyalezo Wosuku</h3>
                                        <p>Rev Cebisile Vellem</p>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
                <div className="day-content" id="tue">Content for Tuesday</div>
                <div className="day-content" id="wed">Content for Wednesday</div>
                <div className="day-content" id="thu">Content for Thursday</div>
                <div className="day-content" id="fri">Content for Friday</div>
                <div className="day-content" id="sat">Content for Saturday</div>
                <div className="day-content" id="sun">Content for Sunday</div>
            </div>
        {/* End of it here */}
      </IonContent>
      <IonFooter>
        <IonToolbar className='footer'>
          <IonTitle class="title">Advertise Here</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default LineUp;





