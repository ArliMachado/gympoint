import React from 'react';
import Header from '~/components/Header';

import {Content} from './styles';

export default function Container({children}) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
