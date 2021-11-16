import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StackNavigator from './navigator';
import {loadUser} from './redux/actions/auth';
import {getToken} from './utils/Constants';
import {useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import 'react-native-gesture-handler';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function onAppBootstrap() {
      // Register the device with FCM
      await messaging().registerDeviceForRemoteMessages();

      // Get the token
      const token = await messaging().getToken();
      console.log('device', token);
      // Save the token
    }
    async function requestUserPermission() {
      const authorizationStatus = await messaging().requestPermission();

      if (authorizationStatus) {
        console.log('Permission status:', authorizationStatus);
      }
      await messaging().requestPermission({
        sound: false,
        announcement: true,
        // ... other permission settings
      });
    }
    async function checkApplicationPermission() {
      const authorizationStatus = await messaging().requestPermission();

      if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        console.log('User has notification permissions enabled.');
      } else if (
        authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
      ) {
        console.log('User has provisional notification permissions.');
      } else {
        console.log('User has notification permissions disabled');
      }
    }

    onAppBootstrap();
    requestUserPermission();
    checkApplicationPermission();
    dispatch(loadUser());
  }, []);
  return <StackNavigator />;
};

export default App;

const styles = StyleSheet.create({});
