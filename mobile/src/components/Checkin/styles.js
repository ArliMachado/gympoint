import styled from 'styled-components/native';
import {fonts, colors, metrics} from '~/styles';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${colors.white};
  margin-top: ${metrics.baseMargin}px;
  height: 45px;
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
`;

export const Title = styled.Text`
  font-size: ${fonts.regular}px;
  font-weight: bold;
  color: ${colors.black};
`;

export const CreatedAt = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.dark};
`;
