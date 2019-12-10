import React, {useState, useEffect} from 'react';

import Help from '~/components/Help';

import api from '~/services/api';

import {NewHelp, List} from './styles';

import Container from '~/components/Container';

export default function HelpRequest({navigation}) {
  const [helpOrders, setHelpOrders] = useState([]);

  async function loadHelpOrders() {
    const response = await api.get('students/1/help-orders');
    setHelpOrders(response.data);
  }

  function handleToHelpAnswered(item) {
    navigation.navigate('HelpAnswered', item);
  }

  function handleNewHelp() {
    navigation.navigate('NewHelp');
  }

  useEffect(() => {
    loadHelpOrders();
  }, []);

  return (
    <Container>
      <NewHelp onPress={handleNewHelp}>Novo pedido de auxílio</NewHelp>
      <List
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={item => (
          <Help data={item} handleHelp={() => handleToHelpAnswered(item)} />
        )}
      />
    </Container>
  );
}
