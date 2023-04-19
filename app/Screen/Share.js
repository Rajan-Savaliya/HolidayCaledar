import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Linking,
  Dimensions,
  Share as ShareDetail,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {sc, vsc} from '../appConstants/Utils';

const Share = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar backgroundColor="#3d9970" />
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
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Share</Text>
          </View>
          <View>
            <Image
              source={require('../Assets/menu.png')}
              style={{opacity: 0, width: 20, height: 20, tintColor: '#FFFFFF'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              textAlign: 'center',
              color: '#000000',
            }}>
            Holiday Calendar
          </Text>
          <Text
            style={{
              // marginVertical: 10,
              fontSize: 16,
              // fontWeight: '500',
              // marginTop: 20,
              textAlign: 'center',
            }}>
            v1.0.0
          </Text>

          <TouchableOpacity
            onPress={() => {
              (async () => {
                try {
                  const result = await ShareDetail.share({
                    message:
                      'https://play.google.com/store/apps/details?id=com.calendarwithholidays',
                  });
                  if (result.action === ShareDetail.sharedAction) {
                    if (result.activityType) {
                      // shared with activity type of result.activityType
                    } else {
                      // shared
                    }
                  } else if (result.action === ShareDetail.dismissedAction) {
                    // dismissed
                  }
                } catch (error) {
                  // Alert.alert(error.message);
                }
              })();
            }}>
            <View
              style={{
                backgroundColor: '#3d9970',
                paddingVertical: 15,
                marginTop: 20,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}>
                Share the app
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Share;
