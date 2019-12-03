import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '~/components/Container';
import Help from '~/components/Help';

import api from '~/services/api';

import {NewHelp, List} from './styles';

export default function HelpRequest() {
  const [helpOrders, setHelpOrders] = useState([]);

  async function loadHelpOrders() {
    const response = await api.get('students/1/help-orders');
    setHelpOrders(response.data);
  }

  useEffect(() => {
    loadHelpOrders();
  }, []);

  return (
    <Container>
      <NewHelp onPress={() => {}}>Novo pedido de auxílio </NewHelp>
      <List
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={item => <Help data={item} handleHelp={() => {}} />}
      />
    </Container>
  );
}

HelpRequest.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({tintColor}) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
