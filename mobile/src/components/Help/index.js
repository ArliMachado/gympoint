import React, {useMemo} from 'react';
import {parseISO, formatDistanceStrict} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  ContentHeader,
  ContentStatus,
  Status,
  DateAnswered,
  Question,
} from './styles';

export default function Help({data, handleHelp}) {
  console.tron.log(data);
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
            <Icon name="check-circle" color="#999999" />
            <Status>{answered ? 'Respondido' : 'Sem resposta'}</Status>
          </ContentStatus>
          <DateAnswered>{dateParsed}</DateAnswered>
        </ContentHeader>
        <Question>{question}</Question>
      </Container>
    </TouchableOpacity>
  );
}