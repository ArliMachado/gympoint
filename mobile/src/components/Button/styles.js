import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import {colors, metrics, fonts} from '~/styles';

export const Container = styled(RectButton)`
  height: 45px;
  background: ${colors.primary};
  border-radius: ${metrics.baseRadius}px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${fonts.medium}px;
`;
