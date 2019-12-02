import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {parseISO, formatDistanceToNow} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {Container, Title, CreatedAt} from './styles';

export default function Checkin({data, handleCheckin}) {
  const {id, created_at} = data.item;

  const dateParsed = useMemo(() => {
    return formatDistanceToNow(parseISO(created_at), {
      locale: pt,
      addSuffix: true,
    });
  }, [created_at]);

  return (
    <TouchableOpacity onPress={handleCheckin}>
      <Container>
        <Title>Check-in #{id}</Title>
        <CreatedAt>{dateParsed}</CreatedAt>
      </Container>
    </TouchableOpacity>
  );
}
