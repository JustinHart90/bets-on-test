import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SamplesDatetime from '../components/SamplesDatetime';
import './css/Upcoming.css';

const Upcoming: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Upcoming</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Upcoming</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SamplesDatetime name="Upcoming" />
      </IonContent>
    </IonPage>
  );
};

export default Upcoming;
