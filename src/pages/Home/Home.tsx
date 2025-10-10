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

  const handlePlay = useCallback(async () => {
    if (!audioRef.current) return;
    
    try {
      setStatus('loading');
      await audioRef.current.play();
      setStatus('playing');
      
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
  }, []);

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

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(STREAM_URL);
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';
    audio.loop = true;
    audioRef.current = audio;

    // Set up media session for background playback
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Zibonele FM 98.2',
        artist: 'Live Radio',
        artwork: [
          { src: '/assets/icon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/assets/icon/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      });

      navigator.mediaSession.setActionHandler('play', handlePlay);
      navigator.mediaSession.setActionHandler('pause', handlePause);
    }

    // Handle audio interruptions (phone calls, other media)
    const handleAudioInterruption = () => {
      console.log('Audio interrupted');
      setStatus('idle');
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const handleAudioResume = () => {
      console.log('Audio can resume');
      // Don't auto-resume, let user decide
    };

    // Listen for audio interruption events
    audio.addEventListener('pause', () => {
      // Only update status if it wasn't a user-initiated pause
      if (status === 'playing') {
        console.log('Audio paused by system');
      }
    });

    audio.addEventListener('ended', () => {
      console.log('Audio ended');
      handleAudioInterruption();
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio error:', e);
      setStatus('error');
      handleAudioInterruption();
    });

    // Handle visibility change - keep playing when app goes to background
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('App went to background - audio continues');
        // Don't pause - let it continue playing
      } else {
        console.log('App came to foreground');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
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