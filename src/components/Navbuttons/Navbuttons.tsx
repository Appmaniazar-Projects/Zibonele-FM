import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
  console.log(mQuery.matches);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton  className="menu-btn"/>
      ) : (
        <>
          <IonButton routerLink={"/home"}>Home </IonButton>
          <IonButton routerLink={"/Events"}>Events </IonButton>
          <IonButton routerLink={"/Lineup"}>Line Up</IonButton>
          <IonButton routerLink={"/Profiles"}>DJ Profiles</IonButton>
          <IonButton routerLink={"/SocialMedia"}>SocialMedia</IonButton>
        </>
      )}
    </div>
  );
};