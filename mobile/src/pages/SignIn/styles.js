import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const LogoContent = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
`;

export const TextLogo = styled.Text`
  color: #ee4e62;
  font-weight: bold;
  font-size: 16px;

  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 20px;
  /* border-width: 1; */
  background: rgba(255, 255, 255, 0.1);
`;

export const FormInput = styled.TextInput.attrs({
  // placeholderTextColor: 'rgba(255, 255, 255, 0.1)',
})`
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
