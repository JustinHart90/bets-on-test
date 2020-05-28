import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './css/Lobby.css';

const Lobby: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lobby</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lobby</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Lobby" />
      </IonContent>
    </IonPage>
  );
};

export default Lobby;
