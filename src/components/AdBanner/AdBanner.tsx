import { useEffect, useState } from 'react';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { IonSpinner, IonText } from '@ionic/react';
import { showBannerAd, BannerAdOptionsCustom } from '../../utils/admob';
import './AdBanner.css';

const AdBanner: React.FC = () => {
  const [adStatus, setAdStatus] = useState('Initializing ad...');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const showAd = async () => {
      try {
        if (!isMounted) return;
        
        setIsLoading(true);
        setError(null);
        setAdStatus('Initializing ad...');
        
        // Wait a moment to ensure the container is rendered
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const success = await showBannerAd({
          isTesting: false, // Production mode
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
          adSize: BannerAdSize.ADAPTIVE_BANNER
        } as BannerAdOptionsCustom);
        
        if (isMounted) {
          if (success) {
            setAdStatus('Advertisement');
            console.log('3. Ad loaded successfully');
          } else {
            throw new Error('Failed to show ad: Unknown error');
          }
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load ad';
        console.error('AdBanner error:', error);
        if (isMounted) {
          setError(errorMessage);
          setAdStatus('Ad failed to load');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    showAd();
    
    // Clean up banner ad when component unmounts
    return () => {
      isMounted = false;
      console.log('4. Cleaning up banner ad...');
      const { hideBanner } = require('../../utils/admob');
      hideBanner().catch((error: Error) => {
        console.error('Error hiding banner ad:', error);
      });
    };
  }, []);

  return (
    <div 
      id="admob-banner-container"
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        minHeight: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        backgroundColor: 'rgba(20, 20, 20, 0.95)',
        padding: '5px 0',
        boxSizing: 'border-box',
        borderTop: '1px solid #D4AF37',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)'
      }}
    >
      <div 
        id="banner-ad-container"
        style={{
          width: '320px',
          minHeight: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 10001,
          // Ensure the container is visible and interactive
          pointerEvents: 'auto',
          // Prevent content from being clipped
          contain: 'layout style paint'
        }}
      >
        {isLoading ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <IonSpinner name="crescent" color="light" />
            <IonText color="light" style={{ fontSize: '0.65rem', opacity: 0.8 }}>
              Loading ad...
            </IonText>
          </div>
        ) : error ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            padding: '0 10px',
            textAlign: 'center'
          }}>
            <IonText color="danger" style={{ fontSize: '0.7rem', fontWeight: '500' }}>
              Ad failed to load
            </IonText>
            <IonText color="medium" style={{ fontSize: '0.6rem', opacity: 0.8 }}>
              {error.length > 50 ? `${error.substring(0, 50)}...` : error}
            </IonText>
          </div>
        ) : (
          <IonText 
            color="light" 
            style={{ 
              fontSize: '0.7rem',
              textAlign: 'center',
              padding: '0 10px',
              zIndex: 2,
              opacity: 0.9
            }}
          >
            {adStatus}
          </IonText>
        )}
      </div>
    </div>
  );
};

export default AdBanner;
