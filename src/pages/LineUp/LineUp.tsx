import React from 'react';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './LineUp.css'; 

const LineUp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <IonTitle class="title">LineUp</IonTitle>
          <IonButtons slot="end">
            {/* custom component */}
          </IonButtons>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content'>
        <Swiper className='slides'>
          <SwiperSlide>
            <IonCard className='card'>
              {/* Monday schedule */}
              <IonCardHeader>
                <IonCardTitle className='title'>Monday
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle>Ezidla Umzi</IonCardTitle>
                <IonCardSubtitle> 00:00-03:00
                </IonCardSubtitle>
                Lenny Makhasi
              </IonCardContent>
              {/* Slide content */}
              <IonCardContent> <IonCardTitle> Itshayile</IonCardTitle>

                <IonCardSubtitle> 03:00-05:00
                </IonCardSubtitle>
                Sisipho Geni
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Umyalezo Wosuku</IonCardTitle>
                <IonCardSubtitle> 04:50-05:00
                </IonCardSubtitle>
                Rev Cebisile Vellem
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Sihamba Nawe </IonCardTitle>
                <IonCardSubtitle> 06:00-09:00

                </IonCardSubtitle>
                Bongani Matenjwa,
                Lelethu Ndlabu and
                Sports Presenter
                Mawonga Mgwatyu
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Esithebeni Nosapho</IonCardTitle>
                <IonCardSubtitle> 09:00-12:00
                </IonCardSubtitle>
                Tabita Busani
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle> Kuyenzeka</IonCardTitle>
                <IonCardSubtitle> 12:00-15:00
                </IonCardSubtitle>
                Pastor Abraham
                Shiyani
              </IonCardContent>
              <IonCardContent>
                <IonCardTitle>Isiphithiphithi</IonCardTitle>
                <IonCardSubtitle> 15:00-18:00
                </IonCardSubtitle>
                Samkelo Nqayi,
                Nomaphelo
                Gqirhana and
                Lindikhaya Qunta
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Ezemidlalo</IonCardTitle>
                <IonCardSubtitle> 19:00-20:00
                </IonCardSubtitle>
                Sakhiwo Sam,
                Sinethemba
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Masifundisane</IonCardTitle>
                <IonCardSubtitle> 20:00-00:00
                </IonCardSubtitle>
                Sisipo Geni
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard className='card'>
              {/* Tuesday schedule */}
              {/* Slide content */}
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard className='card'>
              {/* Wednesday schedule */}
              {/* Slide content */}
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard className='card'>
              {/* Thursday schedule */}
              {/* Slide content */}
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard className='card'>
              {/* Friday schedule */}
              {/* Slide content */}
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard className='card'>
              {/* Saturday schedule */}
              {/* Slide content */}
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard className='card'>
              {/* Sunday schedule */}
              {/* Slide content */}
            </IonCard>
          </SwiperSlide>
        </Swiper>
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





