import React from 'react';

import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
  Image,
  Pressable,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {sc, vsc, msc} from '../appConstants/Utils';

export default function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}>
        <View
          style={{
            paddingHorizontal: sc(5),
            marginTop: vsc(-5),
            backgroundColor: '#FFFEFD',
          }}>
          <Pressable
            onPress={() => {
              props.navigation.navigate('HomeTab');
            }}
            style={{
              paddingVertical: vsc(10),
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: vsc(20),
              marginTop: vsc(40),
            }}>
            <Image
              source={require('../Assets/calendar.png')}
              style={{width: sc(25), height: sc(25), tintColor: '#2B8ED5'}}
            />
            <Text
              style={{
                textAlign: 'center',
                marginLeft: sc(20),
                fontSize: sc(16),
              }}>
              Holiday Calendar
            </Text>
          </Pressable>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#DDDDDD',
              marginHorizontal: sc(20),
            }}
          />


<Pressable
            onPress={() => {
              props.navigation.navigate('Feedback');
            }}
            style={{
              paddingVertical: vsc(10),
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: vsc(20),
              marginTop: vsc(10)
            }}>
            <Image
              source={require('../Assets/feedback.png')}
              style={{width: sc(25), height: sc(25), tintColor: '#2B8ED5'}}
            />
            <Text
              style={{
                textAlign: 'center',
                marginLeft: sc(20),
                fontSize: sc(16),
              }}>
              Feedback
            </Text>
          </Pressable>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#DDDDDD',
              marginHorizontal: sc(20),
            }}
          />





<Pressable
            onPress={() => {
              props.navigation.navigate('Share');
            }}
            style={{
              paddingVertical: vsc(10),
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: vsc(20),
              marginTop: vsc(10)
            }}>
            <Image
              source={require('../Assets/share.png')}
              style={{width: sc(25), height: sc(25), tintColor: '#2B8ED5'}}
            />
            <Text
              style={{
                textAlign: 'center',
                marginLeft: sc(20),
                fontSize: sc(16),
              }}>
              Share
            </Text>
          </Pressable>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#DDDDDD',
              marginHorizontal: sc(20),
            }}
          />






          <Pressable
            onPress={() => {
              props.navigation.navigate('About Us');
            }}
            style={{
              paddingVertical: vsc(10),
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: vsc(20),
              marginTop: vsc(10)
            }}>
            <Image
              source={require('../Assets/information-button.png')}
              style={{width: sc(25), height: sc(25), tintColor: '#2B8ED5'}}
            />
            <Text
              style={{
                textAlign: 'center',
                marginLeft: sc(20),
                fontSize: sc(16),
              }}>
              About Us
            </Text>
          </Pressable>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#DDDDDD',
              marginHorizontal: sc(20),
            }}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          paddingVertical: vsc(0.35),
          backgroundColor: '#DDDDDD',
        }}
      />
      <View
        style={{
          marginBottom: vsc(3),
        }}
      />
    </View>
  );
}
