import React from 'react';
import Container from '~/components/Container';

import {ContentHeader, Title, CreatedAt, Question, Answer} from './styles';

export default function HelpAnswered({item, navigation}) {
  console.tron.log(`item: ${item}`);
  function handleBackHelpOrders() {
    navigation.navigate('HelpRequest');
  }
  return (
    <Container>
      <ContentHeader>
        <Title>PERGUNTA</Title>
        <CreatedAt>{createdAt}</CreatedAt>
      </ContentHeader>
      <Question>{question}</Question>
      <Title>RESPOSTA</Title>
      <Answer>{answer}</Answer>
    </Container>
  );
}
