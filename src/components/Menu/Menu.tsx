import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
  } from "@ionic/react";
  import {
    homeSharp,
    calendarSharp,
    micSharp,
    personSharp,
  } from "ionicons/icons";
  import React from "react";
  import "./Menu.css";
  
  export const Menu = () => {
    return (
      <IonMenu side="end" contentId="main">
        <IonHeader>
          <IonToolbar color='primary' className="menu-toolbar">
            <IonTitle>
              <div className="img-title">
                <img
                  src="assets/img/Zibonele.png"
                  width="400px"
                  height="300px"
                  alt=""
                />
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='primary' className="menu-content">
          <IonList>
            <IonMenuToggle  auto-hide="false">
              <IonItem color="primary"
                className="ion-item"
                button
                routerLink={"/home"}
                routerDirection="none"
              >
                <IonIcon slot="start" icon={homeSharp}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
  
            <IonMenuToggle auto-hide="false">
              <IonItem color="primary"
                className="ion-item"
                button
                routerLink={"/events"}
                routerDirection="none"
              >
                <IonIcon slot="start" icon={calendarSharp}></IonIcon>
                <IonLabel>Events</IonLabel>
              </IonItem>
  
              <IonItem color="primary"
                className="ion-item"
                button
                routerLink={"/lineup"}
                routerDirection="none"
              >
                <IonIcon slot="start" icon={micSharp}></IonIcon>
                <IonLabel>ShowLine Up</IonLabel>
              </IonItem>
  
              <IonItem color="primary"
                className="ion-item"
                button
                routerLink={"/profiles"}
                routerDirection="none"
              >
                <IonIcon slot="start" icon={personSharp}></IonIcon>
                <IonLabel> DJ Profiles</IonLabel>
              </IonItem>
  
              <IonItem color="primary"
                className="ion-item"
                button
                routerLink={"/SocialMedia"}
                routerDirection="none"
              >
                <IonIcon slot="start" icon={homeSharp}></IonIcon>
                <IonLabel>Social Media</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  