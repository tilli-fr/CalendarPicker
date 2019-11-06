import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';

export default function Weekdays(props) {
  const { styles, startFromMonday, weekdays, theme } = props;
  let wd = weekdays;
  if (!wd) {
    wd = startFromMonday? Utils.WEEKDAYS_MON : Utils.WEEKDAYS; // English Week days Array
  }

  return (
    <View
      style={{
        paddingTop: 27,
      }}
    >
      <View style={[styles.dayLabelsWrapper, { borderTopWidth: 0, borderBottomWidth: 0 }]}>
        { wd.map((day, key) => {
            return (
              <Text
                key={key}
                style={[
                  styles.dayLabels,
                  {
                    color: theme.textWeekdayColor,
                    fontFamily: theme.textWeekdayFontFamily,
                    fontWeight: theme.textWeekdayFontWeight,
                    fontSize: theme.textWeekdayFontSize,
                  }
                ]}
              >
                {day}
              </Text>
            );
          })
        }
      </View>
      <View
        style={[
          {
            marginBottom: 20,
            height: 0.25,
            width: '92%',
            backgroundColor: theme.textWeekdayColor,
            alignSelf: 'center',
          }
        ]}
      />
    </View>
  );
}

Weekdays.propTypes = {};
