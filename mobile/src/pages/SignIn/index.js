import React, {useState} from 'react';
import {Image} from 'react-native';

import logo from '~/assets/gympoint.png';

import {Container, LogoContent, TextLogo, Form, FormInput} from './styles';

export default function SignIn() {
  const [id, setId] = useState('');

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
      </Form>
    </Container>
  );
}
