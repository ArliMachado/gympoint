import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';

import {Creators} from '../ducks/checkin';

export function* checkIn({payload}) {
  try {
    const {id} = payload;

    yield call(api.post, `/students/${id}/checkins`);

    yield put(Creators.checkinSuccess());
  } catch (err) {
    yield put(Creators.checkinFailure());
    Alert.alert('Erro no Checkin', 'Houve um erro ao efetuar checkin');
  }
}
