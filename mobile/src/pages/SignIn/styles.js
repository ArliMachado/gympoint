import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors, fonts, metrics} from '~/styles';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${metrics.basePadding * 2.5}px;
`;

export const LogoContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextLogo = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
  font-size: ${fonts.bigger}px;
  margin-top: ${metrics.baseMargin}px;
`;

export const Form = styled.View`
  margin-top: ${metrics.baseMargin * 2}px;
  align-self: stretch;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  flex-direction: row;
  font-size: ${fonts.medium}px;
  border-width: 1;
  border-color: ${colors.light};
  padding: 0 ${metrics.basePadding}px;
  height: 45px;
`;

export const FormButton = styled(Button)`
  margin-top: ${metrics.baseMargin * 2}px;
`;
