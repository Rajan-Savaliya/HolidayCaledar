import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {sc, vsc} from '../appConstants/Utils';

const Feedback = ({navigation}) => {
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
              style={{width: 20, opacity: 0, height: 20, tintColor: '#FFFFFF'}}
            />
          </View>
          <View>
            <Text style={{color: '#ffffff', fontSize: 18}}>Feedback</Text>
          </View>
          <View>
            <Image
              source={require('../Assets/menu.png')}
              style={{opacity: 0, width: 20, height: 20, tintColor: '#FFFFFF'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Text style={{color: '#000000'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: vsc(10),
          backgroundColor: '#FFFFFF',
          paddingHorizontal: sc(20),
          paddingVertical: vsc(20),
        }}>
        <Text style={{fontWeight: '500', color: '#000000'}}>
          Note: 'G' (
          <Text style={{color: '#EA4E6F', fontSize: 14, textAlign: 'center'}}>
            {'\u2B24'}
          </Text>
          ) denotes Gazetted Holiday and 'R' (
          <Text style={{color: '#2B8ED5', fontSize: 14, textAlign: 'center'}}>
            {'\u2B24'}
          </Text>
          ) denotes Restricted Holiday.
        </Text>
      </View>
    </>
  );
};

export default Feedback;
