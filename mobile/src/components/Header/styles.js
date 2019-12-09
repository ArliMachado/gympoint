import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {fonts, colors, metrics} from '~/styles';

export const Container = styled.View`
  padding-top: 10px;
  background-color: ${colors.white};
  flex-direction: row;
  justify-content: ${props =>
    props.haveRedirect ? 'space-between' : 'center'};
  align-items: center;
  margin-bottom: 10px;
`;
export const BackToPage = styled(Icon)`
  margin-left: ${metrics.baseMargin}px;
`;

export const IconContent = styled.View``;

export const LogoContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: ${props =>
    props.haveRedirect ? `${metrics.baseMargin * 3.5}px` : 0};
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
