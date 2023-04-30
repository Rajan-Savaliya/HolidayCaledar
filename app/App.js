import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
  PermissionsAndroid,
  Text,
  Platform,
} from 'react-native';
import AppNavigation from './Navigation';
import Toast from 'react-native-toast-message';
import {sc, vsc, msc} from './appConstants/Utils';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    requestNotificationPermissions();
  }, []);

  const requestNotificationPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Notification Permission',
            message: 'Allow notification permission',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    messaging()
      .subscribeToTopic('holiday')
      .then(() => console.log('Subscribed to topic!'));

    (async () => {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // alert('A new FCM message arrived!' + JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {});

    return unsubscribe;
  }, []);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
    }
  }

  return (
    <>
      <AppNavigation />
      <Toast style={{fontSize: vsc(14)}} ref={ref => Toast.setRef(ref)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7),',
  },
  modalImageItem: {
    position: 'absolute',
    left: '87%',
    top: 40,
    zIndex: 100,
  },
  modalImageViewerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  closeButton: {
    height: 30,
    width: 30,
  },
});

export default App;
