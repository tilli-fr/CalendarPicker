import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import iconLeft from './assets/left.png';
import iconRight from './assets/right.png';

const renderArrowIcon = (iconSource, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={iconSource} style={{ width: 21, height: 20 }} />
  </TouchableOpacity>
);

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    theme,
  } = props;
  const MONTHS = months? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <View
      style={[
        styles.headerWrapper,
        {
          width: '100%',
          justifyContent: 'space-around',
          marginTop: 26,
        }
      ]}
    >
      {renderArrowIcon(iconLeft, onPressPrevious)}
      <View>
        <Text 
          style={[
            styles.monthLabel,
            {
              color: theme.textMonthColor,
              fontFamily: theme.textMonthFontFamily,
              fontWeight: theme.textMonthFontWeight,
              fontSize: theme.textMonthFontSize,
              marginBottom: 0,
            },
          ]}
        >
          { month } { year }
        </Text>
      </View>
      {renderArrowIcon(iconRight, onPressNext)}
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};
