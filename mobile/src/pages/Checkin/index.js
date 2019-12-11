import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {NewCheckin, List} from './styles';

import Container from '~/components/Container';
import CheckinItem from './CheckinItem';

import api from '~/services/api';

export default function Checkins() {
  const [checkinList, setCheckinList] = useState([]);

  async function loadListCheckin() {
    const response = await api.get('students/1/checkins');
    setCheckinList(response.data);
  }

  useEffect(() => {
    loadListCheckin();
  }, []);

  return (
    <Container>
      <NewCheckin onPress={() => {}}>Novo check-in</NewCheckin>
      <List
        data={checkinList}
        keyExtractor={item => String(item.id)}
        renderItem={item => <CheckinItem data={item} />}
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