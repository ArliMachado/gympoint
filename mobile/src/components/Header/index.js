import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import PropTypes from 'prop-types';

import logo from '~/assets/gympoint.png';

import {
  Container,
  IconContent,
  BackToPage,
  LogoContent,
  LogoImage,
  LogoText,
} from './styles';

const Header = ({navigateTo}) => {
  return (
    <Container>
      {navigateTo && (
        <TouchableOpacity onPress={navigateTo}>
          <IconContent>
            <BackToPage name="chevron-left" size={24} />
          </IconContent>
        </TouchableOpacity>
      )}
      <LogoContent>
        <LogoImage source={logo} resizeMode="contain" />
        <LogoText>GYMPOINT</LogoText>
      </LogoContent>
      <View />
    </Container>
  );
};

Header.propTypes = {
  navigateTo: PropTypes.func,
};

Header.defaultProps = {
  navigateTo: null,
};

export default Header;
