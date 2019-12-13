import {takeLatest, all, put, call} from 'redux-saga/effects';

import {Types, signInSuccess, signInFailure} from './actions';

import {checkinRequest} from '~/store/modules/checkin/actions';

import api from '~/services/api';

export function* signIn({payload}) {
  try {
    const {id} = payload;

    // yield call(api.post, `/students/${id}/checkins`);
    yield put(checkinRequest(id));

    yield put(signInSuccess());
  } catch (err) {
    console.tron.log(err);
    yield put(signInFailure());
  }
}

export default all([takeLatest(Types.SIGNIN_REQUEST, signIn)]);
