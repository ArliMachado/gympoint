import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {Container} from './styles';

export default function Header({navigateTo}) {
  return (
    <Container>
      <TouchableOpacity onPress={navigateTo} />
      <Text>teste</Text>
    </Container>
  );
}
