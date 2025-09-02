import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import Events from './pages/Events/Events';
import LineUp from './pages/LineUp/LineUp';
import Profiles from './pages/Profiles/Profiles';
import PresenterDetail from './pages/PresenterDetail/PresenterDetail';
import SocialMedia from './pages/SocialMedia/SocialMedia';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AdMob when the app starts
    const initializeAdMob = async () => {
      try {
        const { initializeAdMob } = await import('./utils/admob');
        await initializeAdMob();
      } catch (error) {
        console.error('Error initializing AdMob:', error);
      }
    };

    initializeAdMob();
  }, []);

  return (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact />
          <Route path="/events" component={Events} exact />
          <Route path="/lineup" component={LineUp} exact />
          <Route path="/profiles" component={Profiles} exact />
          <Route path="/presenters/:id" component={PresenterDetail} exact />
          <Route path="/social" component={SocialMedia} exact />
          <Redirect from="/" to="/home" exact />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
