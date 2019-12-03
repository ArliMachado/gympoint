import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {metrics, fonts, colors} from '~/styles';

export const Container = styled.View`
  display: flex;
  margin-top: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;

  background: ${colors.white};
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconStatus = styled(Icon).attrs({
  size: 16,
})`
  size: '16px;
';
`;

export const Status = styled.Text`
  margin-left: ${metrics.baseMargin / 2}px;
  font-size: ${fonts.regular}px;
  font-weight: bold;
  color: ${colors.regular};
`;

export const DateAnswered = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.dark};
`;

export const Question = styled.Text`
  margin-top: ${metrics.baseMargin * 1.5}px;

  font-size: ${fonts.regular}px;
  color: ${colors.dark};
`;
