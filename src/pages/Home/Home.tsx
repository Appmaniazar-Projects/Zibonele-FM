import React, { useState, useRef, useEffect } from 'react';
import FMRadio from '../../assets/FMRadio.png';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonText,
  IonIcon,
  IonSpinner,
  IonButton
} from '@ionic/react';
import { play, pause, radio, time } from "ionicons/icons";
import "./Home.css";
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import AdBanner from '../../components/AdBanner/AdBanner';
import Waveform from '../../components/Waveform/Waveform';

type StreamStatus = 'idle' | 'loading' | 'playing' | 'error';

const Home: React.FC = () => {
  const [status, setStatus] = useState<StreamStatus>('idle');
  const [broadcastTime, setBroadcastTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<number>();
  
  // Iono.fm stream URL
  const streamUrl = 'https://edge.iono.fm/xice/74_medium.aac';
  const currentTrack = 'Zibonele FM 98.2';

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(streamUrl);
    audioRef.current.preload = 'none';
    
    // Set up event listeners
    audioRef.current.addEventListener('playing', () => setStatus('playing'));
    audioRef.current.addEventListener('waiting', () => setStatus('loading'));
    audioRef.current.addEventListener('error', () => setStatus('error'));
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Handle play/pause
  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    try {
      if (status === 'playing') {
        audioRef.current.pause();
        setStatus('idle');
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        setStatus('loading');
        await audioRef.current.play();
        
        // Start broadcast timer
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = window.setInterval(() => {
          setBroadcastTime(prev => prev + 1);
        }, 1000);
      }
    } catch (error) {
      console.error('Error with audio playback:', error);
      setStatus('error');
    }
  };

  // Format time (HH:MM:SS)
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    
    return [
      h > 0 ? h : null,
      m.toString().padStart(2, '0'),
      s.toString().padStart(2, '0')
    ].filter(Boolean).join(':');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="background">
        <div className="content">
          <div className="visualizer-container">
            <h1 className="station-name">ZIBONELE FM 98.2</h1>
            <div className="status-container">
              <div className="status-indicator">
                {status === 'playing' ? 'ON AIR' : 'OFF AIR'}
              </div>
              {status === 'playing' && (
                <div className="broadcast-timer">
                  <IonIcon icon={time} style={{ marginRight: '4px' }} />
                  {formatTime(broadcastTime)}
                </div>
              )}
            </div>
            
            <div className="play-button-container">
              <div className="waveform-container">
                <Waveform isPlaying={status === 'playing'} />
              </div>
              <button 
                className={`visualizer-play ${status === 'playing' ? 'playing' : ''}`}
                onClick={togglePlay}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <IonSpinner name="crescent" color="dark" />
                ) : status === 'playing' ? (
                  <IonIcon icon={pause} />
                ) : (
                  <IonIcon icon={play} />
                )}
              </button>
            </div>
            
          </div>
          
          <div className="ad-banner-container">
            <AdBanner />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
