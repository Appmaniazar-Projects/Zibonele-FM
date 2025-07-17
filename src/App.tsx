import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import { Menu } from './components/Menu/Menu';
import Events from './pages/Events/Events';
import LineUp from './pages/LineUp/LineUp';
import Profiles from './pages/Profiles/Profiles';
import SocialMedia from './pages/SocialMedia/SocialMedia';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu />
      <IonRouterOutlet id="main">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/Events" component={Events} />
          <Route path="/LineUp" component={LineUp} />
          <Route path="/Profiles" component={Profiles} />
          <Route path="/SocialMedia" component={SocialMedia} />
          <Redirect to="/home" />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
