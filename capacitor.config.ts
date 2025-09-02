import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.zibonelefm1234',
  appName: 'Zibonele FM 98.2',
  webDir: 'build',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#1e1e1e',
      androidSplashResourceName: 'splash',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    AdMob: {
      appId: 'ca-app-pub-3940256099942544~3347511713', 
      isTesting: false, 
      adSize: 'BANNER',
      bannerAdId: 'ca-app-pub-5364194379349961~6147496485', 
      interstitialAdId: 'ca-app-pub-5364194379349961/1470050567', 
      rewardAdId: 'ca-app-pub-5364194379349961/5200308361',
      requestTrackingAuthorization: true,
    },
  },
};

export default config;
