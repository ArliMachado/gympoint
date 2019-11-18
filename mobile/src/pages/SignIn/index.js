import React, {useState} from 'react';
import {Image} from 'react-native';

import logo from '~/assets/gympoint.png';

import {
  Container,
  LogoContent,
  TextLogo,
  Form,
  FormInput,
  FormButton,
} from './styles';

export default function SignIn() {
  const [id, setId] = useState('');

  function handleSubmit() {
    console.log(id);
  }

  return (
    <Container>
      <LogoContent>
        <Image source={logo} />
        <TextLogo>GYMPOINT</TextLogo>
      </LogoContent>
      <Form>
        <FormInput
          keyboardType="number-pad"
          placeholder="Informe seu ID de cadastro"
          value={id}
          onChangeText={setId}
        />
        <FormButton onPress={handleSubmit}>Entrar no Sistema</FormButton>
      </Form>
    </Container>
  );
}
