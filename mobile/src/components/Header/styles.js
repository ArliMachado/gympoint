import styled from 'styled-components/native';

import {fonts, colors, metrics} from '~/styles';

export const Container = styled.View`
  padding-top: 10px;
  background-color: ${colors.white};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const IconContent = styled.View``;

export const LogoContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
