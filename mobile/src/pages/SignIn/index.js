import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from '~/assets/gympoint.png';

import {signInRequest} from '~/store/modules/sign/actions';

import {
  Container,
  LogoContent,
  TextLogo,
  Form,
  FormInput,
  FormButton,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  const {loading} = useSelector(state => state.sign);

  function handleSubmit() {
    dispatch(signInRequest(id));
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
        <FormButton loading={loading} onPress={handleSubmit}>
          Entrar no Sistema
        </FormButton>
      </Form>
    </Container>
  );
}
