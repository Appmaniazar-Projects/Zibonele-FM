import { AdMob, type BannerAdOptions, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';

export { BannerAdPosition };

// Define the custom banner options type
export interface BannerAdOptionsCustom extends Omit<BannerAdOptions, 'adId' | 'position' | 'margin'> {
  adId: string;
  position?: BannerAdPosition;
  margin?: number;
  isTesting?: boolean;
}

// Initialize AdMob with your app ID (replace with your actual app ID)
const ADMOB_APP_ID = 'ca-app-pub-5364194379349961~6147496485';

// Test Ad Unit IDs - Replace with your actual Ad Unit IDs in production
const AD_UNITS = {
  BANNER: 'ca-app-pub-3940256099942544/6300978111', // Google's test banner ID
  INTERSTITIAL: 'ca-app-pub-3940256099942544/1033173712', // Google's test interstitial ID
} as const;

export const initializeAdMob = async () => {
  try {
    // First, initialize the AdMob SDK
    await AdMob.initialize({
      initializeForTesting: true, // Set to false in production
    });

    // Request tracking authorization (iOS 14+)
    if (typeof document !== 'undefined') {
      const { status } = await AdMob.trackingAuthorizationStatus();
      
      if (status === 'notDetermined') {
        console.log('Requesting tracking authorization');
        await AdMob.requestTrackingAuthorization();
      }
    }
  } catch (error) {
    console.error('Error initializing AdMob:', error);
    throw error;
  }
};


export const showBannerAd = async (options?: Partial<BannerAdOptionsCustom>) => {
  try {
    console.log('=== BANNER AD DEBUG ===');
    console.log('1. Starting to show banner with options:', options);
    
    // First, ensure AdMob is initialized
    console.log('2. Ensuring AdMob is initialized...');
    await initializeAdMob();
    
    // Create default options
    const defaultOptions: BannerAdOptions = {
      adId: AD_UNITS.BANNER,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: true,
    };
    
    console.log('3. Final banner options:', JSON.stringify(defaultOptions, null, 2));
    
    // First hide any existing banner
    console.log('4. Hiding any existing banner...');
    try {
      await AdMob.removeBanner();
      console.log('4.1. Successfully removed existing banner');
    } catch (removeError) {
      console.log('4.1. No existing banner to remove, or error removing:', removeError);
    }
    
    // Add a small delay to ensure the previous banner is fully removed
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Then show the new banner
    console.log('5. Showing new banner...');
    // Show the banner with default options
    await AdMob.showBanner(defaultOptions);
    
    console.log('6. Banner ad shown successfully!');
    
    // Log the banner container state for debugging
    const bannerContainer = document.getElementById('banner-ad-container');
    if (bannerContainer) {
      console.log('7. Banner container dimensions:', {
        width: bannerContainer.offsetWidth,
        height: bannerContainer.offsetHeight,
        html: bannerContainer.outerHTML
      });
    } else {
      console.warn('7. Banner container not found in DOM');
    }
    
    return true;
  } catch (error) {
    console.error('!!! BANNER AD ERROR !!!', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    throw error;
  }
};

export const showInterstitialAd = async () => {
  try {
    await AdMob.prepareInterstitial({
      adId: AD_UNITS.INTERSTITIAL,
      isTesting: true, // Set to false in production
    });
    
    await AdMob.showInterstitial();
  } catch (error) {
    console.error('Error showing interstitial ad:', error);
    throw error;
  }
};

export const hideBanner = async () => {
  try {
    await AdMob.removeBanner();
  } catch (error) {
    console.error('Error hiding banner:', error);
    throw error;
  }
};
