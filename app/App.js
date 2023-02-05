import React, {useState} from 'react';
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
} from 'react-native';
import AppNavigation from './Navigation';
import Toast from 'react-native-toast-message';
import {sc, vsc, msc} from './appConstants/Utils';

const App = () => {
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
