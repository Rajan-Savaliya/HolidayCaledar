import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const Aboutus = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar backgroundColor="#2B8ED5" />
      <View
        style={{
          backgroundColor: '#2B8ED5',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingVertical: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={{marginLeft: 20}}>
          <Image
            source={require('../Assets/menu.png')}
            style={{width: 20, height: 20, tintColor: '#FFFFFF'}}
          />
        </TouchableOpacity>
        <View>
          <Text style={{color: '#FFFFFF', fontSize: 18}}>About Us</Text>
        </View>
        <View>
          <Image
            source={require('../Assets/menu.png')}
            style={{opacity: 0, width: 20, height: 20, tintColor: '#FFFFFF'}}
          />
        </View>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );
};

export default Aboutus;
