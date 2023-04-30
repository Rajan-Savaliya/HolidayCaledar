import {
  Dimensions,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

export default {
  APP_VERSION: '1.2.0',
  BASE_URL: 'http://app.ragingdevelopers.com/api/',
  APP_TECHNICAL_ID: 'com.sviragold',
  isiPhoneX: Platform.OS === 'ios' && Dimensions.get('screen').height > 736,
  isSmallDevice: Dimensions.get('screen').height < 630,
  Touchable:
    Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback,
  TouchableFeed:
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
};
