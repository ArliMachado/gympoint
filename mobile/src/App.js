import React from 'react';
import {useSelector} from 'react-redux';

import './config/ReactotronConfig';

import createRouter from '~/routes';

export default function App() {
  const {signed} = useSelector(state => state.sign);

  // const Routes = createRouter(signed);
  const Routes = createRouter(true);
  return <Routes />;
}
