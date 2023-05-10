import {
  Dimensions,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

export default {
  APP_VERSION: '1.0.0',
  // BASE_URL: 'http://app.ragingdevelopers.com/api/',
  BASE_URL: 'https://app.ragingdevelopers.com/api/2024/',
  // BASE_URL: 'https://calendarapi.gkmcqquiz.com/2024/',
  API_TOKEN: 'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva',
  APP_TECHNICAL_ID: 'com.calendarwithholidays',
  isiPhoneX: Platform.OS === 'ios' && Dimensions.get('screen').height > 736,
  isSmallDevice: Dimensions.get('screen').height < 630,
  Touchable:
    Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback,
  TouchableFeed:
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
};
