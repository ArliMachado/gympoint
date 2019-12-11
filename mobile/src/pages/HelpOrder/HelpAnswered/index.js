import React, {useMemo} from 'react';

import {parseISO, formatDistanceStrict} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Container from '~/components/Container';

import {
  Content,
  ContentHeader,
  Title,
  CreatedAt,
  Question,
  Answer,
} from './styles';

export default function HelpAnswered({navigation}) {
  const {createdAt, question, answer} = navigation.getParam('item');

  const dateParsed = useMemo(() => {
    return formatDistanceStrict(parseISO(createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [createdAt]);

  function handleBackHelpOrders() {
    navigation.navigate('HelpOrder');
  }
  return (
    <Container navigateTo={handleBackHelpOrders}>
      <Content>
        <ContentHeader>
          <Title>PERGUNTA</Title>
          <CreatedAt>{dateParsed}</CreatedAt>
        </ContentHeader>
        <Question>{question}</Question>
        <Title>RESPOSTA</Title>
        <Answer>{answer}</Answer>
      </Content>
    </Container>
  );
}
