import {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/database';
import PushNotification from 'react-native-push-notification';

const database = firebase
  .app()
  .database(
    'https://smart-home-af493-default-rtdb.asia-southeast1.firebasedatabase.app',
  );

const useDashboard = () => {
  const [danger, setDanger] = useState(0);
  const [gas, setGas] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    handleStoreFcmToken();
  }, []);

  useEffect(() => {
    const onValueChange = database
      .ref('/data/flame_status')
      .on('value', snapshot => {
        console.log('FLAME STATUS: ', snapshot.val());
        setDanger(snapshot.val());
        if (snapshot.val() === '1') {
          handleDisplayNotification();
        }
      });

    // Stop listening for updates when no longer required
    return () =>
      database.ref(`/data/flame_status/${danger}`).off('value', onValueChange);
  }, [danger]);

  useEffect(() => {
    const onValueChange = database
      .ref('/data/gas_status')
      .on('value', snapshot => {
        console.log('GAS STATUS: ', snapshot.val());
        setGas(snapshot.val());
      });

    // Stop listening for updates when no longer required
    return () =>
      database.ref(`/data/gas_status/${gas}`).off('value', onValueChange);
  }, [gas]);

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
  }, [temperature]);

  const handleStoreFcmToken = () => {
    PushNotification.configure({
      onRegister: function (token) {
        // handleUpdateFcmToken(token.token);
        console.log(token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },
      largeIcon: 'notification_icon',
      smallIcon: 'notification_icon',
      popInitialNotification: true,
      requestPermissions: true,
    });
    PushNotification.createChannel(
      {
        channelId: 'conversation', // (required)
        channelName: 'conversation', // (required)
      },
      created => console.log(`CreateChannel returned '${created}'`),
    );
  };

  const handleDisplayNotification = () => {
    PushNotification.localNotification({
      channelId: 'conversation',
      priority: 'high',
      largeIcon: 'notification_icon',
      smallIcon: 'notification_icon',
      title: 'WARNING!',
      message: 'FIRE DETECTION',
    });
  };

  return {danger, gas, temperature};
};

export default useDashboard;
