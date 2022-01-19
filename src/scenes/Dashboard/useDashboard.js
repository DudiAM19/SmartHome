import {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/database';
import PushNotification from 'react-native-push-notification';

const database = firebase
  .app()
  .database(
    'https://smart-home-af493-default-rtdb.asia-southeast1.firebasedatabase.app',
  );

const useDashboard = () => {
  const [fire, setFire] = useState('0');
  const [gas, setGas] = useState('0');
  const [temperature, setTemperature] = useState('0');
  const [seconds, setSeconds] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds) {
        setSeconds(false);
      } else {
        setSeconds(true);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    handleStoreFcmToken();
  }, []);

  useEffect(() => {
    const onValueChange = database
      .ref('/data/flame_status')
      .on('value', snapshot => {
        console.log('FLAME STATUS: ', snapshot.val());
        setFire(snapshot.val());
        if (snapshot.val() <= '400') {
          handleDisplayNotification();
        }
      });
    // Stop listening for updates when no longer required
    return () => database.ref('/data/flame_status').off('value', onValueChange);
  }, [fire]);

  useEffect(() => {
    const onValueChange = database
      .ref('/data/gas_status')
      .on('value', snapshot => {
        console.log('GAS STATUS: ', snapshot.val());
        setGas(snapshot.val());
        if (snapshot.val() >= '500') {
          handleDisplayNotificationGas();
        }
      });

    // Stop listening for updates when no longer required
    return () => database.ref('/data/gas_status').off('value', onValueChange);
  }, [gas]);

  useEffect(() => {
    const onValueChange = database
      .ref('/data/temperature')
      .on('value', snapshot => {
        console.log('TEMPERATURE: ', snapshot.val());
        setTemperature(snapshot.val());
        if (snapshot.val() >= '34') {
          handleDisplayNotificationTemp();
        }
      });

    // Stop listening for updates when no longer required
    return () => database.ref('/data/temperature').off('value', onValueChange);
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
      message: 'FIRE DETECTION!',
    });
  };

  const handleDisplayNotificationGas = () => {
    PushNotification.localNotification({
      channelId: 'conversation',
      priority: 'high',
      largeIcon: 'notification_icon',
      smallIcon: 'notification_icon',
      title: 'WARNING!',
      message: 'GAS LEAKING!, turn on the fan automatically',
    });
  };

  const handleDisplayNotificationTemp = () => {
    PushNotification.localNotification({
      channelId: 'conversation',
      priority: 'high',
      largeIcon: 'notification_icon',
      smallIcon: 'notification_icon',
      title: 'WARNING!',
      message: 'The temperature is too HOT!, turn on the fan',
    });
  };

  return {fire, gas, temperature, seconds};
};

export default useDashboard;
