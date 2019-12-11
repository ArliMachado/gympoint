import React, {useState} from 'react';

import Container from '~/components/Container';

import {Content, TextHelp, SendButton} from './styles';

export default function New({navigation}) {
  const [textHelp, setTextHelp] = useState('');

  function handleBackToPage() {
    navigation.navigate('HelpOrder');
  }

  return (
    <Container navigateTo={handleBackToPage}>
      <Content>
        <TextHelp
          placeholder="Inclua seu pedido de auxílio"
          multiline
          numberOfLines={15}
          onChangeText={setTextHelp}
          value={textHelp}
        />
        <SendButton onPress={() => {}}>Enviar pedido</SendButton>
      </Content>
    </Container>
  );
}
