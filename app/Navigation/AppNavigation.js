import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';

import Home from '../Screen/Home';
import Aboutus from '../Screen/Aboutus';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const NavigationAnimationType =
    CardStyleInterpolators.forRevealFromBottomAndroid;

  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            cardStyleInterpolator: NavigationAnimationType,
          }}
        />

        <Stack.Screen
          name="Aboutus"
          component={Aboutus}
          options={{
            headerShown: false,
            cardStyleInterpolator: NavigationAnimationType,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AppNavigation;
