import React from 'react';
import Container from '~/components/Container';

import {ContentHeader, Title, CreatedAt, Question, Answer} from './styles';

export default function HelpAnswered({navigation}) {
  const {createdAt, question, answer} = navigation.getParam('item');

  function handleBackHelpOrders() {
    navigation.navigate('HelpRequest');
  }
  return (
    <Container navigateTo={handleBackHelpOrders}>
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
