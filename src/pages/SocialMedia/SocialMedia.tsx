import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {
  call,
  logoFacebook,
  logoInstagram,
  logoTiktok,
  logoWhatsapp
} from 'ionicons/icons';

import React from 'react';
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import './SocialMedia.css';

const SocialMedia: React.FC = () => {
  // Using direct anchor tags for better compatibility
  const SocialLink = ({ url, icon, label }: { url: string; icon: any; label: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
      <IonCard>
        <IonCardContent className="social-item">
          <IonIcon icon={icon} className="social-icon" />
          <IonLabel>{label}</IonLabel>
        </IonCardContent>
      </IonCard>
    </a>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <IonTitle class="title">Social Media</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className='background' fullscreen>
        <div className="social-list">
          <SocialLink 
            url="https://www.facebook.com/share/17D2J1Emj2/" 
            icon={logoFacebook} 
            label="Facebook" 
          />
          
          <SocialLink 
            url="https://www.instagram.com/zibonelefm_98.2/" 
            icon={logoInstagram} 
            label="Instagram" 
          />
          
          <SocialLink 
            url="https://wa.me/27765515915" 
            icon={logoWhatsapp} 
            label="WhatsApp" 
          />
          
          <SocialLink 
            url="https://www.tiktok.com/@zibonelefm98.2" 
            icon={logoTiktok} 
            label="TikTok" 
          />
          
          <SocialLink 
            url="tel:+27804580000" 
            icon={call} 
            label="Call Us" 
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SocialMedia;
