import {  IonBackButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Profiles.css'
import { NavButtons } from '../../components/Navbuttons/Navbuttons';

const Profiles: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <IonTitle class="title">DJ Profiles</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className='content' fullscreen>
      <IonCard className='card'>
            <IonCardContent>
              <div className="img-title">
              <img
                src="assets/img/Lelethu.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Lelethu Ndlabu</IonCardSubtitle>
            <p>  Lelethu "ledza/Lele" Ndlabu was born in Cape Town. She is a co-host of Sihamba Nawe 629.</p>
            </IonCardContent>
          </IonCard>
          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Manga.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Sibongile Manga</IonCardSubtitle>
             Sibongile Manga also known as Manga Manga was born in Cofimvaba in the Eastern Cape. He joined Zibonele FM in 2017 as a sports presenter.
            </IonCardContent>
          </IonCard>
          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Tabita.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Tabita Busani</IonCardSubtitle>
             Tabita Busani is a passionate, ambistious and career driven radio presenter and a Producer who was born in King Williams Town, Eastern Cape. She currently
             hosts "Ndikuthembisa Uthando" and "Health" Esithembeni" and she is a LLB student in UNISA.
            </IonCardContent>
          </IonCard>
          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Sisipho-Geni.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Sisipho Geni</IonCardSubtitle>
            Sisipho was born and bred in Cape Town. She became a radio presenter in 2017.
            </IonCardContent>
          </IonCard>

          <IonCard className='card'>
         
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Bongani.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Bongani Matenjwa</IonCardSubtitle>
                Bongani Matenjwa was born in Cape Town in a township called Gugulethu. His Radio career started in 2015 and in 2017 he won the best presenter
                award.
            </IonCardContent>
          </IonCard>

          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Rev-Gijana.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Ntobeko Gijana</IonCardSubtitle>
             Reverand Ntobeko Gijana was born in Queenstown, Eastern Cape. His love for God coupled with his Theology background has enabled him to host shows
             that focus on interpreting the word of God, shows that address, build and equip marriages and shows that uplift spirituality.
            </IonCardContent>
          </IonCard>

          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Sobanyatheli-Sobantu.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Siyaxola Sobantu</IonCardSubtitle>
            Siyaxola "DJ Sobanyatheli" Sobantu is a vibrant Masikhandi Presenter born in Centane, Estern Cape. He joined Zibonele FM in 2015 and in 2017
            he won SATMA award or best traditional Community Radio DJ.
            </IonCardContent>
          </IonCard>

          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Sakhiwo-Sam.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Sakhiwo Sam</IonCardSubtitle>
            Sakhiwo "Sakies"Sam was born in King William's Town, Eastern Cape . Sakhiwo is a teacher by profession and he has been in the radio scene for more than 20 years
            . He is a sports presenter and along with teaching, these are two things he is most passionate about.
            </IonCardContent>
          </IonCard>

      

          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Ntobsi-Mcetywa.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Nontobeko Mcetywa</IonCardSubtitle>
              Nontobeko "Ntobsie" Mcetywa was born in Tsolo, Eastern Cape. Besides being a radio host Ntobsie is an MC, event organizer and founder of Ntobsie Professional
              Models. She hosts various shows at Zibonele FM.
            </IonCardContent>
          </IonCard>

          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Samza.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Samkelo Nkqayi</IonCardSubtitle>
              Samkelo "Samza Ngwana" Nkqayi born in the Eastern Cape got into the radio scene back in 2013 an has never looked back since. Currently, he co-hosts the afternoon drive show called
               "Isiphithiphithi"
            </IonCardContent>
          </IonCard>
          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Rev-Vellem.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Cebisile Vellem</IonCardSubtitle>
             Reverand Cebisile Vellem was born in Butterworth in the Eastern Cape. He was ordained as a Bishop in 1995 and appointed to lead his current church in 2017.
             He hosts a morning show that aims at giving a message of the day to the listeners of Zibonele FM.
            </IonCardContent>
          </IonCard>

          <IonCard className='card'>
            <IonCardContent>
            <div className="img-title">
              <img
                src="assets/img/Rev-Malangeni.png"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <IonCardSubtitle className='name'>Rev Malangeni</IonCardSubtitle>
              Ntomboxolo Tyalana Malangeni was born in Queenstown, Eastern Cape. She is a pastor by calling and she hosts one of the gospel shows at Zibonele FM.
            </IonCardContent>
          </IonCard>

      </IonContent>

      <IonFooter>
        <IonToolbar className='footer'>
          <IonTitle class="title">Advertise Here</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Profiles;