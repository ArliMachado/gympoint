import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';

import {
  Types,
  checkinSuccess,
  getCheckinRequest,
  getCheckinSuccess,
  checkinFailure,
} from './actions';

export function* checkIn({payload}) {
  try {
    const {id} = payload;

    yield call(api.post, `/students/${id}/checkins`);

    Alert.alert('Sucesso', 'Checkin efetuado com sucesso');
    yield put(checkinSuccess());

    yield put(getCheckinRequest(id));
  } catch ({response}) {
    yield put(checkinFailure());
    Alert.alert('Erro ao efetuar checkin', response.data.error);
  }
}

export function* getCheckins({payload}) {
  try {
    const {id} = payload;

    const {data} = yield call(api.get, `/students/${id}/checkins`);

    yield put(getCheckinSuccess(data));
  } catch (err) {
    yield put(checkinFailure());
    Alert.alert('Erro no Checkin', 'Houve um erro ao listar checkin');
  }
}

export default all([
  takeLatest(Types.NEW_CHECKIN_REQUEST, checkIn),
  takeLatest(Types.GET_CHECKIN_REQUEST, getCheckins),
]);
