

import {
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,IonRow,IonCol,
} from "@ionic/react";
import "./Home.css";
import { NavButtons } from '../../components/Navbuttons/Navbuttons';



import { playCircleOutline, call, logoWhatsapp } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">

            {/* <div className="img-title">
              <img
                src="assets/img/Zibonele.png"
                width="60px"
                height="60px"
                alt=""
              />
            </div> */}
          
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content" >
      <iframe src="https://iframe.iono.fm/s/74?accent=F7E734&background=000000&border=000000&text=F7E734&rounded=0&layout=square"
       width="350" 
       height="350" >

       </iframe>
        <IonGrid>
  <IonRow>
    <IonCol>
      <div className="call">
      <a href="tel:0213618962"> 
      <IonIcon className="ion-align-self-center" icon={call} size="large" 
       color="F7E734;"></IonIcon></a>
     </div>
    </IonCol>
  
    <IonCol>
      <div className="whatsapp"> 
      <a href='https://wa.me/27765515915'>
            <IonIcon icon={logoWhatsapp}  size="large"/>
           </a>
        </div>
    </IonCol>
  </IonRow>
</IonGrid>
      
       
      </IonContent>
      <IonFooter>
        <IonToolbar className='footer'>
          <IonTitle class="title">Advertise Here</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home