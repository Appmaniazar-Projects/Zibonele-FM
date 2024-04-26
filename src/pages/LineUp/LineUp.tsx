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
              {/* Slide content */}
            </IonCard>
            

          {/* Tuesday schedule */}
          <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='title'>Tuesday
                </IonCardTitle>
              </IonCardHeader>


              <IonCardContent>
                <IonCardTitle>Ezidla Umzi</IonCardTitle>
                <IonCardSubtitle> 00:00-03:00
                </IonCardSubtitle>
                Lenny Makhasi
              </IonCardContent>
              <IonCardContent>
                <IonCardTitle>Itshayile</IonCardTitle>
                <IonCardSubtitle> 03:00-05:00
                </IonCardSubtitle>
                Sisipho Geni
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Sihamba Nawe 629</IonCardTitle>
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
                <IonCardTitle>Ezopuhliso / Developmental Issues</IonCardTitle>
                <IonCardSubtitle> 12:00- 15:00
                </IonCardSubtitle>
                Fundi Ntshwanti
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
                <IonCardTitle>Ndikuthembis’  uthando</IonCardTitle>
                <IonCardSubtitle>19:00-20:00
                </IonCardSubtitle>
                Rev Gijana &
                Fungiwe Nkathu
              </IonCardContent>


            </IonCard>
          {/* Slide content */}


            {/* Wednesday schedule */}
            <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='title'>Wednesday
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <IonCardTitle>Ezidla Umzi</IonCardTitle>
                <IonCardSubtitle> 00:00-03:00
                </IonCardSubtitle>
                Thembinkosi Njokweni
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Itshayile</IonCardTitle>
                <IonCardSubtitle> 03:00-05:00
                </IonCardSubtitle>
                Buyiselwa Raraza
              </IonCardContent>
              <IonCardContent>
                <IonCardTitle>Umyalezo Wosuku</IonCardTitle>
                <IonCardSubtitle> 04:50-05:00
                </IonCardSubtitle>
                Rev Cebisile Vellem
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Sihamba Nawe
                  629</IonCardTitle>
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
                <IonCardTitle> Cel’ingoma  Ndikudlalele</IonCardTitle>
                <IonCardSubtitle> 12:00-15:00
                </IonCardSubtitle>
                Fundi Ntshwanti
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
                <IonCardTitle> Ezemidlalo</IonCardTitle>
                <IonCardSubtitle> 19:00-20:00
                </IonCardSubtitle>
                Sakhiwo Sam,
                Sinethemba
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle> Ingcambu Zevangeli</IonCardTitle>
                <IonCardSubtitle> 20:00-00:00
                </IonCardSubtitle>
                Mr. Xola Skhosana
                & Nosie Dyantyi
                Mawanda
              </IonCardContent>

            </IonCard>
            {/* Slide content */}


            {/* Thursday schedule */}
            <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='title' >Thursday
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle>Ezidla Umzi</IonCardTitle>
                <IonCardSubtitle> 00:00-03:00
                </IonCardSubtitle>
                Lenny Makhasi
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Itshayile</IonCardTitle>
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
                <IonCardTitle>Sihamba Nawe
                  629</IonCardTitle>
                <IonCardSubtitle> 06:00-09:00
                </IonCardSubtitle>
                Bongani Matenjwa,
                Lelethu Ndlabu and
                Sports Presenter
                Mawonga Mgwatyu
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Thob’isandla sakho Yehova </IonCardTitle>
                <IonCardSubtitle> 9h:00 - 12h:00
                </IonCardSubtitle>
                Rev N. Malangeni
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Ezopuhliso / Developmental Issues</IonCardTitle>
                <IonCardSubtitle> 12:00- 15:00
                </IonCardSubtitle>
                Bongani Matenjwa
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Isiphithiphithi</IonCardTitle>
                <IonCardSubtitle> 15:00-18:00
                </IonCardSubtitle>
                Fundi Ntshwanti & Samkelo Nqayi, Mawonga Mgwatyu
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Ezemidlalo</IonCardTitle>
                <IonCardSubtitle> 19:00-20:00
                </IonCardSubtitle>
                Sibongile Manga, & Sakhiwo Sam, Mawonga Mgwatyu
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle> Intlalo Yomtshato</IonCardTitle>
                <IonCardSubtitle> 20:00-24:00
                </IonCardSubtitle>
                Rev Ntobeko Gijana
                & Promise Mkonza
              </IonCardContent>
            </IonCard>
            {/* Slide content */}

            {/* Friday schedule */}
            <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='title'>Friday
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle>Zibondiwe</IonCardTitle>
                <IonCardSubtitle> 00:00-03:00
                </IonCardSubtitle>
                Mawonga Mgwatyu, Ntobsie Mcetywa & Lindikhaya Qunta
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Umyalezo Wosuku</IonCardTitle>
                <IonCardSubtitle> 04:50-05:00
                </IonCardSubtitle>
                Rev Cebisile Vellem
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle> Sihamba Nawe
                  629</IonCardTitle>
                <IonCardSubtitle> 06:00-09:00
                </IonCardSubtitle>
                Bongani Matenjwa,
                Lelethu Ndlabu and
                Sports Presenter
                Mawonga Mgwatyu
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle> Unyango Lwesintu</IonCardTitle>
                <IonCardSubtitle> 11:00-12:00
                </IonCardSubtitle>
                Sive Mjanyana
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle> Friday
                  Dedications</IonCardTitle>
                <IonCardSubtitle> 12:00-15:00
                </IonCardSubtitle>
                Fundi Ntshwanti
              </IonCardContent>
              <IonCardTitle>Isiphithiphithi</IonCardTitle>
              <IonCardContent>
                <IonCardSubtitle> 15:00-18:00
                </IonCardSubtitle>
                Samkelo Nqayi,
                Nomaphelo
                Gqirhana and
                Lindikhaya Qunta
              </IonCardContent>

              {/* <IonCardContent>
           <IonCardSubtitle> 19:00-20:00 -  Ezemidlalo
             </IonCardSubtitle>
            Sibongile Manga, & Sakhiwo Sam, Mawonga Mgwatyu
           </IonCardContent> */}

              <IonCardContent>
                <IonCardTitle>Ezakuthi Iingoma</IonCardTitle>
                <IonCardSubtitle> 19:00-21:00
                </IonCardSubtitle>
                Lunga Mgamle
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>SGubu Sekhasi</IonCardTitle>
                <IonCardSubtitle> 21:00- 00:00
                </IonCardSubtitle>
                Ntobsie Mcetywa &
                Lindikhaya Qunta
              </IonCardContent>



            </IonCard>
            {/* Slide content */}

            {/* Saturday schedule */}
            <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='title'>Saturday
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <IonCardTitle>Mnandi
                  Breakfast</IonCardTitle>
                <IonCardSubtitle> 03:00-06:00
                </IonCardSubtitle>
                Nomaphelo
                Gqirhana &
                Sivuyisiwe Mahela
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Sports
                  Parliament</IonCardTitle>
                <IonCardSubtitle> 06:00-08:00
                </IonCardSubtitle>
                Sakhiwo Sam &
                Sibongile Manga
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>  Umntwana
                  Likhamva</IonCardTitle>
                <IonCardSubtitle> 08:00-09:00
                </IonCardSubtitle>
                Ntobsie Mcetywa
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Siguguth’
                  unxhweme</IonCardTitle>
                <IonCardSubtitle> 09:00-12:00
                </IonCardSubtitle>
                Siyaxola Sobantu
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Ikwayala Zethu</IonCardTitle>
                <IonCardSubtitle> 12:00-13:00
                </IonCardSubtitle>
                Sisipho Geni
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Unako</IonCardTitle>
                <IonCardSubtitle> 13:00-15:00
                </IonCardSubtitle>
                Sive Mjanyana
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Ayatshis’
                  Amateki</IonCardTitle>
                <IonCardSubtitle> 15:00-18:00
                </IonCardSubtitle>
                Sibongile Manga
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Yonwaba Nathi</IonCardTitle>
                <IonCardSubtitle> 20:00-21:00
                </IonCardSubtitle>
                Samkelo Nkqayi
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Yonwaba Nathi</IonCardTitle>
                <IonCardSubtitle> 21:00-00:00
                </IonCardSubtitle>
                Olethokuhle Qinisile
              </IonCardContent>

            </IonCard>
            {/* Slide content */}

            {/* Sunday schedule */}
            <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='title'>Sunday
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle>Ezincamis’
                  Umxhelo</IonCardTitle>
                <IonCardSubtitle> 00:00-03:00
                </IonCardSubtitle>
                Malibongwe
                Nqanqase
              </IonCardContent>
              <IonCardContent>
                <IonCardTitle>Masivuke</IonCardTitle>
                <IonCardSubtitle> 03:00-06:00
                </IonCardSubtitle>
                Nomonde
                Jolimvaba
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Hamba Vangeli </IonCardTitle>
                <IonCardSubtitle> 06:00-09:00
                </IonCardSubtitle>
                Neliswa Zotani
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Sunday Chill</IonCardTitle>
                <IonCardSubtitle> 09:00-12:00
                </IonCardSubtitle>
                Fundi Ntshwanti
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Isisele Solwazi</IonCardTitle>
                <IonCardSubtitle> 12:00-15:00
                </IonCardSubtitle>
                Sive Mjanyana
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Ebukhoneni</IonCardTitle>
                <IonCardSubtitle> 15:00-18:00
                  Bakhe
                </IonCardSubtitle>
                Buyiselwa Raraza
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Uhadi Lwakho</IonCardTitle>
                <IonCardSubtitle> 18:00-19:00
                </IonCardSubtitle>
                Mzondeleli Gampu
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Abefundisi</IonCardTitle>
                <IonCardSubtitle> 19:00-20:00
                </IonCardSubtitle>
                Abefundisi
              </IonCardContent>

              <IonCardContent>
                <IonCardTitle>Uhlangulo
                  Lomphefumlo</IonCardTitle>
                <IonCardSubtitle> 20:00-00:00
                </IonCardSubtitle>
                Rev Gijana &
                Fungiwe Nkathu
              </IonCardContent>

            </IonCard>
            {/* Slide content */}

          </SwiperSlide>
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
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





