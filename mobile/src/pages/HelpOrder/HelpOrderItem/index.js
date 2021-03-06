import React, {useMemo} from 'react';
import {parseISO, formatDistanceStrict} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  ContentHeader,
  ContentStatus,
  IconStatus,
  Status,
  DateAnswered,
  Question,
} from './styles';

export default function HelpOrderItem({data, handleHelp}) {
  const {answered, createdAt, question} = data.item;

  const dateParsed = useMemo(() => {
    return formatDistanceStrict(parseISO(createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [createdAt]);

  return (
    <TouchableOpacity onPress={handleHelp}>
      <Container>
        <ContentHeader>
          <ContentStatus>
            <IconStatus answered={answered} name="check-circle" />
            <Status answered={answered}>
              {answered ? 'Respondido' : 'Sem resposta'}
            </Status>
          </ContentStatus>
          <DateAnswered>{dateParsed}</DateAnswered>
        </ContentHeader>
        <Question>{question}</Question>
      </Container>
    </TouchableOpacity>
  );
}
