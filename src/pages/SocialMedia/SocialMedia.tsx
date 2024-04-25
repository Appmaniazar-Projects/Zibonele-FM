import {  IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './SocialMedia.css'
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import { call, logoFacebook, logoInstagram, logoTwitter, logoWhatsapp, share, shareSocial } from 'ionicons/icons';

const SocialMedia: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <IonTitle class="title">Social Media</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className='background' fullscreen>
      <IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={shareSocial} />
          </IonFabButton>

          <IonFabList side="top">
          <a href="tel:0213618962"> 
       <IonIcon className="ion-align-self-center" 
          icon={call} size="large" 
                color="F7E734;"></IonIcon></a>
           
          </IonFabList>
          <IonFabList side="bottom">
            <a href='https://www.facebook.com/ZiboneleFM'>
            <IonIcon icon={logoFacebook} />
            </a>
           
          </IonFabList>
          <IonFabList side="start">
            <a href='https://www.instagram.com/zibonelefm_98.2/'>
            <IonIcon icon={logoInstagram} />
            </a>
         
          </IonFabList>
          <IonFabList side="end">
            <a href='https://twitter.com/ZiboneleFM98_2'>
            <IonIcon icon={logoTwitter} />
            </a>
            
          </IonFabList>
        </IonFab>
       
       
      </IonContent>

      <IonFooter>
        <IonToolbar className='footer'>
          <IonTitle class="title">Advertise Here</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SocialMedia;