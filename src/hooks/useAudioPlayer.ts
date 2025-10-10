import { useState, useEffect } from 'react';
import { audioService, AudioState } from '../services/AudioService';

export const useAudioPlayer = () => {
  const [audioState, setAudioState] = useState<AudioState>(audioService.getState());

  useEffect(() => {
    const unsubscribe = audioService.addListener((state) => {
      setAudioState({ ...state });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isPlaying: audioState.isPlaying,
    currentTime: audioState.currentTime,
    duration: audioState.duration,
    volume: audioState.volume,
    play: () => audioService.play(),
    pause: () => audioService.pause(),
    togglePlay: () => audioService.togglePlay(),
    setVolume: (volume: number) => audioService.setVolume(volume),
    seekTo: (time: number) => audioService.seekTo(time),
    setStreamUrl: (url: string) => audioService.setStreamUrl(url)
  };
};
