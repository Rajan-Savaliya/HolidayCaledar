import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {sc, vsc} from '../appConstants/Utils';

const Aboutus = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        {/* <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{
          position: 'absolute',
          zIndex: 11,
          top: Dimensions.get('window').height - sc(165),
          right: 20,
          backgroundColor: '#2B8ED5',
          width: sc(50),
          height: sc(50),
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 3,
        }}>
        <Image
          source={require('../Assets/menu.png')}
          style={{width: 20, height: 20, tintColor: '#FFFFFF'}}
        />
      </TouchableOpacity> */}
        <StatusBar backgroundColor="#3d9970" />
        <ScrollView>
          <View
            style={{
              backgroundColor: '#3d9970',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingVertical: 15,
            }}>
            <View style={{marginLeft: 20}}>
              <Image
                source={require('../Assets/menu.png')}
                style={{
                  width: 20,
                  opacity: 0,
                  height: 20,
                  tintColor: '#FFFFFF',
                }}
              />
            </View>
            <View>
              <Text style={{color: '#FFFFFF', fontSize: 18}}>About Us</Text>
            </View>
            <View>
              <Image
                source={require('../Assets/menu.png')}
                style={{
                  opacity: 0,
                  width: 20,
                  height: 20,
                  tintColor: '#FFFFFF',
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <Text
              style={{
                marginTop: vsc(20),
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 20,
                color: '#000000',
              }}>
              Holiday Calendar
            </Text>

            <Text style={{marginTop: sc(30), fontSize: 18}}>AUTHOR</Text>
            <Text style={{marginTop: sc(5), fontSize: 16, color: '#808080'}}>
              Raging Developers
            </Text>

            <Text style={{marginTop: sc(30), fontSize: 18}}>WEBSITE</Text>
            <Text
              onPress={() => {
                Linking.openURL('https://www.ragingdevelopers.com');
              }}
              style={{
                marginTop: sc(5),
                fontSize: 16,
                color: '#3d9970',
                textDecorationLine: 'underline',
              }}>
              https://www.ragingdevelopers.com/
            </Text>

            <Text style={{marginTop: sc(30), fontSize: 18}}>
              PRIVACY POLICY
            </Text>
            <Text
              onPress={() => {
                Linking.openURL(
                  'https://ragingdevelopers.com/privacy_policy/privacy_policy_holiday_calendar',
                );
              }}
              style={{
                marginTop: sc(5),
                color: 'green',
                fontSize: 16,
                color: '#3d9970',
                textDecorationLine: 'underline',
              }}>
              https://ragingdevelopers.com/privacy_policy/privacy_policy_holiday_calendar
            </Text>

            <Text style={{marginTop: sc(30), fontSize: 18}}>
              CONTACT E-MAIL
            </Text>
            <Text
              onPress={() => {
                Linking.openURL('mailto:ragingdevelopers@gmail.com');
              }}
              style={{
                marginTop: sc(5),
                color: 'green',
                fontSize: 16,
                color: '#3d9970',
              }}>
              ragingdevelopers@gmail.com
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Aboutus;
