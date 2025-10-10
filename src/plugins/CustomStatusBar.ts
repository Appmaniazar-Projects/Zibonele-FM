import { registerPlugin } from '@capacitor/core';

interface CustomStatusBarPlugin {
  setBackgroundColor(options: { color: string }): Promise<void>;
  setOverlaysWebView(options: { overlay: boolean }): Promise<void>;
}

const CustomStatusBar = registerPlugin<CustomStatusBarPlugin>('CustomStatusBar');

export const StatusBar = {
  setBackgroundColor: async (color: string) => {
    try {
      await CustomStatusBar.setBackgroundColor({ color });
    } catch (error) {
      console.error('Error setting status bar color:', error);
    }
  },

  setOverlaysWebView: async (overlay: boolean) => {
    try {
      await CustomStatusBar.setOverlaysWebView({ overlay });
    } catch (error) {
      console.error('Error setting status bar overlay:', error);
    }
  }
};

export default StatusBar;
