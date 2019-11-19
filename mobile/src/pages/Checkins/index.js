import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Checkins() {
  return <View />;
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
