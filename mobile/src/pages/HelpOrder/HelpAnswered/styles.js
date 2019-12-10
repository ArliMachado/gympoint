import styled from 'styled-components/native';

import {colors, metrics, fonts} from '~/styles';

export const Content = styled.View`
  background-color: ${colors.white};
  padding: ${metrics.baseMargin * 2}px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const Title = styled.Text`
  color: ${colors.darker};
  font-size: ${fonts.regular};
  font-weight: bold;

  margin-bottom: ${metrics.baseMargin * 1.5}px;
`;

export const CreatedAt = styled.Text``;

export const Question = styled.Text`
  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const Answer = styled.Text`
  margin-bottom: ${metrics.baseMargin * 2}px;
`;
