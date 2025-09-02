import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect, useState } from "react";

interface MediaQueryListEvent {
  matches: boolean;
  media: string;
}

export const NavButtons = () => {
  const [mQuery, setMQuery] = useState<{ matches: boolean }>({
    matches: window.innerWidth > 768,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px");
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setMQuery({ matches: e.matches });
    };
    
    // For older browsers that don't support addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  return (
    <div>
      {!mQuery.matches ? (
        <IonMenuButton className="menu-btn" />
      ) : (
        <>
          <IonButton routerLink="/home">Home</IonButton>
          <IonButton routerLink="/events">Events</IonButton>
          <IonButton routerLink="/lineup">Line Up</IonButton>
          <IonButton routerLink="/profiles">DJ Profiles</IonButton>
          <IonButton routerLink="/social">Social</IonButton>
        </>
      )}
    </div>
  );
};