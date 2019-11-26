import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {fonts, colors, metrics} from '~/styles';

export const Container = styled.View`
  height: ${54 + getStatusBarHeight()};
  padding-top: ${getStatusBarHeight()};
  background-color: ${colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${metrics.basePadding}px;
`;
