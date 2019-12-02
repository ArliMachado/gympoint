import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HelpDesk() {
  return <View />;
}

HelpDesk.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({tintColor}) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
