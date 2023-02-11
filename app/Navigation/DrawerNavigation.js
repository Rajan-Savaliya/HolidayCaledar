import React, {memo} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import AppNavigation from './AppNavigation.js';
import CustomDrawerContent from './CustomDrawerContent.js';

const {width} = Dimensions.get('screen');

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        drawerStyle={{
          width: width * 0.0, // 0.001
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="AppNavigation" component={AppNavigation} />
      </Drawer.Navigator>
    </>
  );
};

export default memo(DrawerNavigation);
