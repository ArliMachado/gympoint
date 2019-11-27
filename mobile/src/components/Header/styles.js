import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {fonts, colors, metrics} from '~/styles';

export const Container = styled.View`
  height: ${54 + getStatusBarHeight()};
  padding-top: ${getStatusBarHeight()};
  background-color: ${colors.white};
  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const BackToPage = styled(Icon)`
  /* margin-left: ${metrics.baseMargin}px; */
`;

export const IconContent = styled.View`
  margin-left: ${metrics.baseMargin}px;
`;

export const LogoContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* margin-left: ${metrics.screenWidth * 0.5}px; */
`;

export const LogoImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const LogoText = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
  font-size: ${fonts.regular}px;
  margin-left: ${metrics.baseMargin}px;
`;
