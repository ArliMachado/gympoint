import React, {useState, useEffect} from 'react';
import {withNavigationFocus} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';

import {NewCheckin, List} from './styles';

import Container from '~/components/Container';
import CheckinItem from './CheckinItem';

import {checkinRequest} from '~/store/modules/checkin/actions';

import api from '~/services/api';

function Checkins({isFocused}) {
  const dispatch = useDispatch();

  const {student_id} = useSelector(state => state.sign);

  const [checkinList, setCheckinList] = useState([]);

  useEffect(() => {
    async function loadListCheckin() {
      const response = await api.get(`students/${student_id}/checkins`);
      setCheckinList(response.data);
    }
    console.tron.log(`isFocused: ${isFocused}`);
    if (isFocused) {
      loadListCheckin();
    }
  }, [isFocused, student_id]);

  function handleCheckin() {
    dispatch(checkinRequest(student_id));
  }
  return (
    <Container>
      <NewCheckin onPress={() => handleCheckin(student_id)}>
        Novo check-in
      </NewCheckin>
      <List
        data={checkinList}
        keyExtractor={item => String(item.id)}
        renderItem={item => <CheckinItem data={item} />}
      />
    </Container>
  );
}

export default withNavigationFocus(Checkins);
