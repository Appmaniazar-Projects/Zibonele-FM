import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

export interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}

class AudioService {
  private audio: HTMLAudioElement | null = null;
  private streamUrl: string = 'YOUR_STREAM_URL'; // Replace with your stream URL
  private listeners: ((state: AudioState) => void)[] = [];
  private state: AudioState = {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1.0
  };

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio(this.streamUrl);
      this.setupEventListeners();
      
      // Handle app state changes
      if (Capacitor.isNativePlatform()) {
        App.addListener('appStateChange', ({ isActive }) => {
          if (!isActive && this.state.isPlaying) {
            // App is going to background, ensure audio continues playing
            this.audio?.play().catch(console.error);
          }
        });
      }
    }
  }

  private setupEventListeners() {
    if (!this.audio) return;

    this.audio.addEventListener('play', () => this.updateState({ isPlaying: true }));
    this.audio.addEventListener('pause', () => this.updateState({ isPlaying: false }));
    this.audio.addEventListener('timeupdate', () => {
      if (this.audio) {
        this.updateState({
          currentTime: this.audio.currentTime,
          duration: this.audio.duration || 0
        });
      }
    });
    this.audio.addEventListener('volumechange', () => {
      if (this.audio) {
        this.updateState({ volume: this.audio.volume });
      }
    });
  }

  private updateState(partialState: Partial<AudioState>) {
    this.state = { ...this.state, ...partialState };
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }

  public async play() {
    try {
      if (!this.audio) return;
      
      // On iOS, we need to play inside a user gesture
      if (Capacitor.getPlatform() === 'ios') {
        // @ts-ignore - This is needed for iOS
        document.body.addEventListener('touchstart', this.iosAudioPlayFix, { once: true });
      }
      
      await this.audio.play();
      this.updateState({ isPlaying: true });
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  }

  private iosAudioPlayFix = () => {
    if (this.audio && this.state.isPlaying) {
      this.audio.play().catch(console.error);
    }
  };

  public pause() {
    this.audio?.pause();
    this.updateState({ isPlaying: false });
  }

  public togglePlay() {
    if (this.state.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public setVolume(volume: number) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
      this.updateState({ volume: this.audio.volume });
    }
  }

  public seekTo(time: number) {
    if (this.audio) {
      this.audio.currentTime = time;
      this.updateState({ currentTime: time });
    }
  }

  public addListener(callback: (state: AudioState) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  public getState(): AudioState {
    return this.state;
  }

  public setStreamUrl(url: string) {
    if (this.audio) {
      const wasPlaying = this.state.isPlaying;
      this.audio.pause();
      this.audio.src = url;
      if (wasPlaying) {
        this.play();
      }
      this.streamUrl = url;
    }
  }
}

export const audioService = new AudioService();

// This is needed for iOS to work properly
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.audioService = audioService;
}
