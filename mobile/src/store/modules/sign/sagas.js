import {takeLatest, all, put, call} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {Types, signInSuccess, signInFailure} from './actions';

import {getCheckinRequest} from '~/store/modules/checkin/actions';

import api from '~/services/api';

export function* signIn({payload}) {
  try {
    const {id} = payload;

    yield call(api.post, `/students/${id}/checkins`);

    yield put(getCheckinRequest(id));

    yield put(signInSuccess());
  } catch ({response}) {
    Alert.alert('Erro ao efetuar checkin', response.data.error);
    yield put(signInFailure());
  }
}

export default all([takeLatest(Types.SIGNIN_REQUEST, signIn)]);
