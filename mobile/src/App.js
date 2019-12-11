import React from 'react';
import {useSelector} from 'react-redux';

import createRouter from '~/routes';

import './config/ReactotronConfig';

export default function App() {
  const {signed} = useSelector(state => state.sign);
  console.tron.log(`signed: ${signed}`);

  const Routes = createRouter(signed);
  // const Routes = createRouter(true);
  return <Routes />;
}
