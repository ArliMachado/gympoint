import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';

import {Types, checkinSuccess, checkinFailure} from './actions';

export function* checkIn({payload}) {
  try {
    const {id} = payload;

    yield call(api.post, `/students/${id}/checkins`);

    yield put(checkinSuccess());
  } catch (err) {
    yield put(checkinFailure());
    Alert.alert('Erro no Checkin', 'Houve um erro ao efetuar checkin');
  }
}

export default all([takeLatest('@checkin/CHECK_IN_REQUEST', checkIn)]);
