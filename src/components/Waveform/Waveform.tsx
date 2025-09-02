import React from 'react';
import './Waveform.css';

interface WaveformProps {
  isPlaying: boolean;
  bars?: number;
  color?: string;
}

const Waveform: React.FC<WaveformProps> = ({ 
  isPlaying, 
  bars = 20, 
  color = '#D4AF37' 
}) => {
  return (
    <div className="waveform">
      {Array.from({ length: bars }).map((_, i) => (
        <div 
          key={i}
          className={`waveform-bar ${isPlaying ? 'animate' : ''}`}
          style={{
            '--bar-index': i,
            '--bar-color': color,
            '--animation-delay': `${i * 0.05}s`,
            '--bar-height': `${10 + Math.random() * 40}%`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Waveform;
