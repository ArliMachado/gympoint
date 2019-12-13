import React from 'react';
import {View} from 'react-native';

import PropTypes from 'prop-types';

import logo from '~/assets/gympoint.png';

import {Container, LogoContent, LogoImage, LogoText} from './styles';

const Header = () => {
  return (
    <Container>
      <LogoContent>
        <LogoImage source={logo} resizeMode="contain" />
        <LogoText>GYMPOINT</LogoText>
      </LogoContent>
      <View />
    </Container>
  );
};

export default Header;
