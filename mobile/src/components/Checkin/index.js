import React from 'react';

import {Container, Title, CreatedAt} from './styles';

export default function Checkin({data}) {
  const {id, created_at} = data.item;
  return (
    <Container>
      <Title>Check-in #{id}</Title>
      <CreatedAt>{created_at}</CreatedAt>
    </Container>
  );
}
