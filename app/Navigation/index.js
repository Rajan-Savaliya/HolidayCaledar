import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';

import DrawerNavigation from './DrawerNavigation.js';
import NoNetwork from '../components/NoNetwork.Component.js';

const Navigation = () => {

  const [isOffline, setOfflineStatus] = useState(false);
  const refIsOffline = useRef(false);
  const refOfflineUpdate = useRef(0);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      if (refOfflineUpdate.current === 0 || refIsOffline.current) {
        refOfflineUpdate.current = 1;
        refIsOffline.current = offline;
        setOfflineStatus(offline);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // (async () => {
    //   const userToken = await AsyncStorage.getItem('@user_token');
    //   const userObj = await AsyncStorage.getItem('@user_obj');
    //   const tempUserObj = JSON.parse(userObj);
    //   try {
    //     dispatch(setTokenValueAction(userToken, tempUserObj));
    //     setTimeout(() => {
    //       SplashScreen.hide();
    //     }, 1000);
    //   } catch (e) {
        SplashScreen.hide();
    //   }
    // })();
  }, []);

  if (isOffline) {
    return <NoNetwork />;
  }

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
