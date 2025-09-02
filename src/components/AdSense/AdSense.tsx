import React, { useEffect } from 'react';

type AdSenseProps = {
  slot: string;
  style?: React.CSSProperties;
  format?: string;
  layout?: string;
  layoutKey?: string;
  fullWidthResponsive?: boolean;
  className?: string;
};

const AdSense: React.FC<AdSenseProps> = ({
  slot,
  style = { display: 'block' },
  format = 'auto',
  layout = '',
  layoutKey = '',
  fullWidthResponsive = true,
  className = '',
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-YOUR-PUBLISHER-ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive.toString()}
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
      />
    </div>
  );
};

export default AdSense;
