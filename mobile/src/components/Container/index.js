import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import {Content} from './styles';

const Container = ({children, navigateTo}) => {
  return (
    <>
      <Header navigateTo />
      <Content>{children}</Content>
    </>
  );
};

Container.defaultProps = {
  navigateTo: null,
};

export default Container;
