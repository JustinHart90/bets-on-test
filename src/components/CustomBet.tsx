import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonTextarea, IonInput, IonCheckbox, IonRange } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';
import './css/CustomBet.css';

interface ContainerProps {
    name: string;
}


const CustomBet: React.FC<ContainerProps> = ({ name }) => {
    const now = new Date();
    const [selectedDate, setSelectedDate] = useState<string>(now.toString());
    const [checked, setChecked] = useState(true);
    const [number, setNumber] = useState<number>(1);
    
    function setAmount(num: React.SetStateAction<number>) {
        return setNumber(num);
    }

    return (
        <IonContent>
            <IonItem>
                <IonLabel>Custom Bet?</IonLabel>
                <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
            </IonItem>

            <IonItem>
                <IonLabel>Bet End Date/Time</IonLabel>
                <IonDatetime displayFormat="D MMM YYYY H:mm" min="2020" max="2050" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>

            <IonItem className="showDetail">
                <IonLabel>Select Category</IonLabel>
                <IonSelect>
                <IonSelectOption value="">Sports</IonSelectOption>
                <IonSelectOption value="nes">TV & Entertainment</IonSelectOption>
                <IonSelectOption value="n64">Other</IonSelectOption>
                </IonSelect>
            </IonItem>
            
            <IonItem className="showDetail">
                <IonLabel>Select Sport</IonLabel>
                <IonSelect>
                <IonSelectOption value="nfl">NFL</IonSelectOption>
                <IonSelectOption value="nba">NBA</IonSelectOption>
                <IonSelectOption value="mlb">MLB</IonSelectOption>
                <IonSelectOption value="nhl">NHL</IonSelectOption>
                <IonSelectOption value="pga">PGA</IonSelectOption>
                <IonSelectOption value="ncaa">NCAA</IonSelectOption>
                <IonSelectOption value="nascar">NASCAR</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Bet Description</IonLabel>
                <IonTextarea placeholder="enter description here"></IonTextarea>
            </IonItem>

            <IonItem>
                <IonLabel>Amount (USD) $</IonLabel>
                <IonInput type="number" value={number} color="success" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
                <IonButton expand="block" color="success" onClick={() => setAmount(5)}>$5</IonButton>
                <IonButton expand="block" color="success" onClick={() => setAmount(10)}>$10</IonButton>
                <IonButton expand="block" color="success" onClick={() => setAmount(20)}>$20</IonButton>
            </IonItem>
        </IonContent>
    );
};

export default CustomBet;