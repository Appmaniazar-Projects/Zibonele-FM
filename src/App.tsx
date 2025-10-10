import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { 
  IonApp, 
  IonRouterOutlet, 
  setupIonicReact, 
  IonSplitPane
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { StatusBar, Style } from '@capacitor/status-bar';

// Pages
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import Events from './pages/Events/Events';
import LineUp from './pages/LineUp/LineUp';
import Profiles from './pages/Profiles/Profiles';
import PresenterDetail from './pages/PresenterDetail/PresenterDetail';
import SocialMedia from './pages/SocialMedia/SocialMedia';

// Styles
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';
import './App.css';

setupIonicReact();

const App: React.FC = () => {
  // Set initial status bar style (only in native apps)
  useEffect(() => {
    const setupStatusBar = async () => {
      try {
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#000000' });
        await StatusBar.setOverlaysWebView({ overlay: false });
      } catch (error) {
        console.log('StatusBar not available in this environment');
      }
    };
    
    setupStatusBar();
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
