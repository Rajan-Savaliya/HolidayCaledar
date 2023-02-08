import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screen/Home';
import Share from '../Screen/Share';
import Feedback from '../Screen/Feedback';
import Aboutus from '../Screen/Aboutus';

import {sc, vsc} from '../appConstants/Utils';

const Tab = createBottomTabNavigator();
const {Navigator} = createBottomTabNavigator();

const TabNavigation = () => {
  function MyTabBar({state, descriptors, navigation}) {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#DDDDDD',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const setItenValue = (label, isFocused) => {
            if (label === 'HomeTab') {
              return (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: vsc(15),
                    paddingBottom: vsc(15),
                    height: vsc(60),
                  }}>
                  <Image
                    source={require('../Assets/homeicon.png')}
                    style={{
                      width: sc(24),
                      height: sc(24),
                      tintColor: isFocused ? '#FF851B' : '#808080',
                    }}
                  />
                </TouchableOpacity>
              );
            } else if (label === 'Feedback') {
              return (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: vsc(15),
                    paddingBottom: vsc(15),
                  }}>
                  <Image
                    source={require('../Assets/feedback.png')}
                    style={{
                      width: sc(24),
                      height: sc(24),
                      tintColor: isFocused ? '#FF851B' : '#808080',
                    }}
                  />
                </TouchableOpacity>
              );
            } else if (label === 'Share') {
              return (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: vsc(15),
                    paddingBottom: vsc(15),
                  }}>
                  <Image
                    source={require('../Assets/share.png')}
                    style={{
                      width: sc(24),
                      height: sc(24),
                      tintColor: isFocused ? '#FF851B' : '#808080',
                    }}
                  />
                </TouchableOpacity>
              );
            } else if (label === 'About Us') {
              return (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: vsc(15),
                    paddingBottom: vsc(15),
                    position: 'relative',
                  }}>
                  <Image
                    source={require('../Assets/information-button.png')}
                    style={{
                      width: sc(24),
                      height: sc(24),
                      tintColor: isFocused ? '#FF851B' : '#808080',
                    }}
                  />
                </TouchableOpacity>
              );
            }
          };

          return <>{setItenValue(label, isFocused)}</>;
        })}
      </View>
    );
  }

  return (
    <Navigator
      initialRouteName={'HomeTab'}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#FF851B',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          height: vsc(60),
          borderTopWidth: 0,
          borderColor: '#808080',
          overflow: 'hidden',
        },
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}></View>
          ),
        }}
      />

      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}></View>
          ),
        }}
      />

      <Tab.Screen
        name="Share"
        component={Share}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}></View>
          ),
        }}
      />

      <Tab.Screen
        name="About Us"
        component={Aboutus}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}></View>
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
