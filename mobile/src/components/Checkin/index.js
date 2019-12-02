import React, {useMemo} from 'react';
import {parseISO, formatRelative, formatDistanceToNow} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {Container, Title, CreatedAt} from './styles';

export default function Checkin({data}) {
  const {id, created_at} = data.item;

  const dateParsed = useMemo(() => {
    return formatDistanceToNow(parseISO(created_at), {
      locale: pt,
      addSuffix: true,
    });
  }, [created_at]);

  return (
    <Container>
      <Title>Check-in #{id}</Title>
      <CreatedAt>{dateParsed}</CreatedAt>
    </Container>
  );
}
