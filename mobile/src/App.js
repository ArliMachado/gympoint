import React from 'react';

import SignIn from '~/pages/SignIn';

import createRouter from '~/routes';

export default function App() {
  const Routes = createRouter();
  return <Routes />;
}
