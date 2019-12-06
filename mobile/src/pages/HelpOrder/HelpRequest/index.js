import React, {useState, useEffect} from 'react';

import Help from '~/components/Help';

import api from '~/services/api';

import {NewHelp, List} from './styles';

import Container from '~/components/Container';

export default function HelpRequest({navigation}) {
  const [helpOrders, setHelpOrders] = useState([]);
  console.tron.log(navigation);

  async function loadHelpOrders() {
    const response = await api.get('students/1/help-orders');
    setHelpOrders(response.data);
  }

  useEffect(() => {
    loadHelpOrders();
  }, []);

  return (
    <Container>
      <NewHelp onPress={() => navigation.navigate()}>
        Novo pedido de auxílio{' '}
      </NewHelp>
      <List
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={item => (
          <Help
            data={item}
            handleHelp={() => navigation.navigate('HelpAnswered', {item})}
          />
        )}
      />
    </Container>
  );
}
