import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {Dropdown} from 'react-native-element-dropdown';
import {sc, vsc} from '../appConstants/Utils';
import Spinner from 'react-native-loading-spinner-overlay';

const Home = ({navigation}) => {
  const [renderCalendarTitle, setRenderCalendarTitle] = useState('');
  const [markDateList, setMarkDateList] = useState({});
  const [daysRenderList, setDaysRenderList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState({
    value: 0,
    label: 'India',
    id: 0,
    name: 'India',
  });
  const selectedStateRef = useRef({
    value: 0,
    label: 'India',
    id: 0,
    name: 'India',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getIndiaHolidayList();
    getStatusList();
  }, []);

  const getStatusList = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva',
    );
    myHeaders.append(
      'Cookie',
      'ci_session=5974da4746ca2e7124fabea6dfd3101d6e6c81ff',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('http://app.ragingdevelopers.com/api/state', requestOptions)
      .then(response => response.json())
      .then(result => {
        let tempList =
          result?.data && Array.isArray(result?.data) ? result?.data : [];
        let updateTempList = tempList.map(item => {
          return {...item, label: item.name, value: item.id};
        });
        setStateList(updateTempList);
      })
      .catch(error => console.log('error', error));
  };

  const getIndiaHolidayList = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva',
    );
    myHeaders.append(
      'Cookie',
      'ci_session=5974da4746ca2e7124fabea6dfd3101d6e6c81ff',
    );

    if (selectedStateRef?.current?.id === 0) {
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
    } else {
      var formdata = new FormData();
      formdata.append('state_id', selectedStateRef?.current?.id);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
    }

    fetch(
      selectedStateRef?.current?.id === 0
        ? 'http://app.ragingdevelopers.com/api/holiday'
        : 'http://app.ragingdevelopers.com/api/stateholiday',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        if (result.success) {
          setDaysRenderList(
            result?.data && Array.isArray(result?.data) ? result?.data : [],
          );
          let tempObjectList = {};
          // G- Must holiday - ornage  "#EA4E6F"
          // R- blue "#2B8ED5"
          result?.data.forEach(item => {
            tempObjectList = {
              ...tempObjectList,
              [item.date]: {
                selected: true,
                selectedColor: item?.type == 'R' ? '#2B8ED5' : '#EA4E6F',
              },
            };
          });

          setMarkDateList(tempObjectList);
        }
      })
      .catch(error => {
        setLoading(false);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar backgroundColor="#2B8ED5" />
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: '#fff', fontSize: vsc(14)}}
        overlayColor="rgba(0,0,0, 0.5)"
      />

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
          <Text style={{color: '#FFFFFF', fontSize: 18}}>Holiday Calendar</Text>
        </View>
        <View>
          <Image
            source={require('../Assets/menu.png')}
            style={{opacity: 0, width: 20, height: 20, tintColor: '#FFFFFF'}}
          />
        </View>
      </View>

      <Dropdown
        style={{
          marginHorizontal: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#DDDDDD',
          marginTop: vsc(10),
          paddingVertical: vsc(5),
          paddingHorizontal: sc(10),
        }}
        placeholderStyle={{}}
        selectedTextStyle={{}}
        inputSearchStyle={{}}
        iconStyle={{}}
        data={[{value: 0, label: 'India', id: 0, name: 'India'}, ...stateList]}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={selectedState?.label ?? 'Select state'}
        searchPlaceholder="Search"
        value={selectedState?.value ?? ''}
        //   onFocus={() => setIsFocus(true)}
        //   onBlur={() => setIsFocus(false)}
        onChange={item => {
          setSelectedState(item);
          selectedStateRef.current = item;
          getIndiaHolidayList();
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        containerStyle={{paddingBottom: sc(20)}}>
        <Calendar
          // Initially visible month. Default = now
          initialDate={moment().format('YYYY-MM-DD')}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          // minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
            setRenderCalendarTitle(month.timestamp);
          }}
          // Hide month navigation arrows. Default = false
          // hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={direction => <Arrow />}
          // Do not show days of other months in month page. Default = false
          // hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          // disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          // hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          // onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          // onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          // disableArrowLeft={true}
          // Disable right arrow. Default = false
          // disableArrowRight={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          // disableAllTouchEventsForDisabledDays={true}
          markedDates={markDateList}
          // Replace default month and year title with custom one. the function receive a date as parameter
          renderHeader={date => {
            console.log(date, 'rgrnsnhsndhnsnh');
            let renderDate = moment(date).format('DD MM YYYY');
            return (
              <Text style={{color: '#000000'}}>
                {moment(renderCalendarTitle ? renderCalendarTitle : '').format(
                  'MMMM YYYY',
                )}
              </Text>
            );
            /*Return JSX*/
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />

        <View style={{marginTop: 20}}>
          {daysRenderList.map((renderDay, index) => {
            return (
              <>
                {moment(renderCalendarTitle).format('MM YYYY') ==
                moment(renderDay.date).format('MM YYYY') ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 10,
                      borderColor: '#dddddd',
                      borderWidth: 1,
                      paddingVertical: 5,
                      marginHorizontal: 10,
                      borderRadius: 10,
                      shadowColor: '#FFFFFF',
                      elevation: 1,
                    }}
                    key={index}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:
                          renderDay?.type == 'R' ? '#2B8ED5' : '#EA4E6F',
                        marginLeft: 13,
                      }}>
                      <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                        {moment(renderDay.date).format('D')}
                      </Text>
                    </View>
                    <View style={{marginLeft: 20, flex: 1}}>
                      <Text numberOfLines={3}>{renderDay?.name}</Text>
                    </View>
                  </View>
                ) : null}
              </>
            );
          })}
        </View>
        <View style={{paddingBottom: 40}} />
      </ScrollView>
    </View>
  );
};

export default Home;
