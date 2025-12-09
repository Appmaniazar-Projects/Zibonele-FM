import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons,
  IonIcon, 
  IonSpinner
} from '@ionic/react';
import { play, pause, radio, time } from 'ionicons/icons';
import { NavButtons } from '../../components/Navbuttons/Navbuttons';
import './Home.css';

// Import images
import logoImage from '../../assets/images/FMRadio.png';

type StreamStatus = 'idle' | 'loading' | 'playing' | 'error';

const STREAM_URL = 'https://edge.iono.fm/xice/74_medium.aac';

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const Home: React.FC = () => {
  const [status, setStatus] = useState<StreamStatus>('idle');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Show notification function
  const showNotification = useCallback(() => {
    if ('Notification' in window && Notification.permission === 'granted' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Zibonele FM 98.2', {
          body: 'Now Playing',
          icon: '/assets/icon/icon-192x192.png',
          badge: '/assets/icon/icon-192x192.png',
          data: { url: window.location.href },
          requireInteraction: true
        });
      }).catch(error => {
        console.error('Error showing notification:', error);
      });
    } else if ('Notification' in window && Notification.permission === 'granted') {
      // Fallback to regular notification if service worker is not available
      new Notification('Zibonele FM 98.2', {
        body: 'Now Playing',
        icon: '/assets/icon/icon-192x192.png'
      });
    }
  }, []);

  const handlePlay = useCallback(async () => {
    if (!audioRef.current) return;
    
    try {
      setStatus('loading');
      
      // Request notification permission if not already granted
      if ('Notification' in window && Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission();
        console.log('Notification permission:', permission);
      }
      
      await audioRef.current.play();
      setStatus('playing');
      
      // Show notification when starting to play
      showNotification();
      
      // Start time update interval
      timerRef.current = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      }, 1000);
      
    } catch (error) {
      console.error('Error playing audio:', error);
      setStatus('error');
    }
  }, [showNotification]);

  const handlePause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setStatus('idle');
    
    // Clear time update interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (status === 'playing') {
      handlePause();
    } else {
      handlePlay();
    }
  }, [status, handlePlay, handlePause]);

  // State to track if splash screen is visible
  const [showSplash, setShowSplash] = useState(true);

  // Initialize audio and service worker
  useEffect(() => {
    // Initialize audio
    const audio = new Audio(STREAM_URL);
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';
    audio.loop = true;
    audioRef.current = audio;

    // Set up media session
    const setupMediaSession = () => {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: 'Zibonele FM',
          artist: 'Live Radio',
          artwork: [
            { src: '/assets/icon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/assets/icon/icon-512x512.png', sizes: '512x512', type: 'image/png' },
          ]
        });

        navigator.mediaSession.setActionHandler('play', handlePlay);
        navigator.mediaSession.setActionHandler('pause', handlePause);
      }
    };

    // Initialize service worker
    const initServiceWorker = async (): Promise<void> => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/service-worker.js');
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        } catch (error) {
          console.error('ServiceWorker registration failed: ', error);
        }
      }
    };

    // Request notification permission
    const requestNotificationPermission = async (): Promise<void> => {
      if ('Notification' in window && Notification.permission === 'default') {
        try {
          const permission = await Notification.requestPermission();
          console.log('Notification permission:', permission);
        } catch (error) {
          console.error('Error requesting notification permission:', error);
        }
      }
    };

    // Initialize everything
    const initialize = async () => {
      try {
        setupMediaSession();
        await initServiceWorker();
        await requestNotificationPermission();
        
        // Hide splash screen after initialization
        setTimeout(() => setShowSplash(false), 2000);
      } catch (error) {
        console.error('Initialization error:', error);
        setShowSplash(false);
      }
    };

    initialize();

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations()
          .then(registrations => {
            registrations.forEach(registration => registration.unregister());
          })
          .catch(console.error);
      }
    };
  }, [handlePlay, handlePause]);

  return (
    <IonPage className="home-page">
      {/* Background Image */}
      <div className="background-image"></div>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zibonele FM</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="player-container">
          <div className="status-container">
            <div className="station-name">Zibonele FM 98.2</div>
            <div className="status-badges">
              <div className="status-indicator">
                <IonIcon icon={radio} />
                {status === 'playing' ? 'ON AIR' : 'OFF AIR'}
              </div>
              <div className="current-time">
                <IonIcon icon={time} />
                {formatTime(currentTime)}
              </div>
            </div>
          </div>
          
          <button 
            className={`play-button ${status === 'playing' ? 'playing' : ''}`} 
            onClick={togglePlay}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <IonSpinner name="crescent" />
            ) : status === 'playing' ? (
              <IonIcon icon={pause} />
            ) : (
              <IonIcon icon={play} />
            )}
          </button>
        </div>
        <audio ref={audioRef} src={STREAM_URL} />
      </IonContent>
    </IonPage>
  );
};

export default Home;