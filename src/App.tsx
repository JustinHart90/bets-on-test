import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeSharp, playCircleSharp, listCircleSharp, timeSharp, refreshCircleSharp } from 'ionicons/icons';
import Lobby from './pages-nav/Lobby';
import Live from './pages-nav/Live';
import Home from './pages-nav/Home';
import Upcoming from './pages-nav/Upcoming';
import Recent from './pages-nav/Recent';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Lobby" component={Lobby} exact={true} />
          <Route path="/Live" component={Live} exact={true} />
          <Route path="/Home" component={Home} />
          <Route path="/Upcoming" component={Upcoming} />
          <Route path="/Recent" component={Recent} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Lobby" href="/Lobby">
            <IonIcon icon={listCircleSharp} />
            <IonLabel>Lobby</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Live" href="/Live">
            <IonIcon icon={playCircleSharp} />
            <IonLabel>Live</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Upcoming" href="/Upcoming">
            <IonIcon icon={timeSharp} />
            <IonLabel>Upcoming</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Recent" href="/Recent">
            <IonIcon icon={refreshCircleSharp} />
            <IonLabel>Recent</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
