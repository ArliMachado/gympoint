import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '~/components/Container';

export default function HelpDesk() {
  return <Container />;
}

HelpDesk.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({tintColor}) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
