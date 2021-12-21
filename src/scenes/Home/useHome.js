import {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/database';

const database = firebase
  .app()
  .database(
    'https://smart-home-af493-default-rtdb.asia-southeast1.firebasedatabase.app',
  );

const useHome = () => {
  const [fan, setFan] = useState(false);
  const [lamp1, setLamp1] = useState(false);
  const [lamp2, setLamp2] = useState(false);
  const [lamp3, setLamp3] = useState( false );
  
  const [temperature, setTemperature] = useState(0);

  const handleFan = () => {
    setFan(!fan);
    database
      .ref('/control')
      .update({
        fan: fan ? 1 : 0,
      })
      .then(() => console.log('Data updated.'));
  };

  const handleLamp1 = () => {
    setLamp1(!lamp1);
    database
      .ref('/control')
      .update({
        lamp1: lamp1 ? 1 : 0,
      })
      .then(() => console.log('Data updated.'));
  };

  const handleLamp2 = () => {
    setLamp2(!lamp2);
    database
      .ref('/control')
      .update({
        lamp2: lamp2 ? 1 : 0,
      })
      .then(() => console.log('Data updated.'));
  };

  const handleLamp3 = () => {
    setLamp3(!lamp3);
    database
      .ref('/control')
      .update({
        lamp3: lamp3 ? 1 : 0,
      })
      .then(() => console.log('Data updated.'));
  };

  useEffect(() => {
    const onValueChange = database
      .ref('/data/temperature')
      .on('value', snapshot => {
        console.log('TEMPERATURE: ', snapshot.val());
        setTemperature(snapshot.val());
      });

    // Stop listening for updates when no longer required
    return () =>
      database
        .ref(`/data/temperature/${temperature}`)
        .off('value', onValueChange);
  }, [temperature] );
  
  return {
    fan,
    setFan,
    lamp1,
    setLamp1,
    lamp2,
    setLamp2,
    lamp3,
    setLamp3,
    handleFan,
    handleLamp1,
    handleLamp2,
    handleLamp3,
    temperature,
  };
};

export default useHome;
