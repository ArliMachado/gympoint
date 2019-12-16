import React, {useState, useEffect} from 'react';
import {withNavigationFocus} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';

import {NewCheckin, List} from './styles';

import Container from '~/components/Container';
import CheckinItem from './CheckinItem';

import {checkinRequest} from '~/store/modules/checkin/actions';

function Checkins() {
  const dispatch = useDispatch();

  const {student_id} = useSelector(state => state.sign);
  const {checkins} = useSelector(state => state.checkin);

  const [checkinList, setCheckinList] = useState([]);

  useEffect(() => {
    setCheckinList(checkins);
  }, [checkins]);

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
