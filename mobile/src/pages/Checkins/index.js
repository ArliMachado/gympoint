import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

import Header from '~/components/Header';

export default function Checkins() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
