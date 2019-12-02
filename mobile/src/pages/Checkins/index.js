import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {NewCheckin, List} from './styles';

import Container from '~/components/Container';
import Checkin from '~/components/Checkin';

import api from '~/services/api';

export default function Checkins() {
  const [checkins, setCheckins] = useState([]);

  async function loadCheckins() {
    const response = await api.get('students/1/checkins');
    setCheckins(response.data);
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  return (
    <Container>
      <NewCheckin onPress={() => {}}>Novo check-in</NewCheckin>
      <List
        data={checkins}
        keyExtractor={item => String(item.id)}
        renderItem={item => <Checkin data={item} handleCheckin={() => {}} />}
      />
    </Container>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
