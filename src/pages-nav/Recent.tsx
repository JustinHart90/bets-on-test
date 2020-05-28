import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Samples from '../components/Samples';
import './css/Recent.css';

const Recent: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recent</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recent</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Samples name="Recent" />
      </IonContent>
    </IonPage>
  );
};

export default Recent;
