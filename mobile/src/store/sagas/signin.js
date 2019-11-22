import {put, call} from 'redux-saga/effects';

import {Creators as SignInCreators} from '../ducks/signin';

import api from '~/services/api';

export function* signIn({payload}) {
  try {
    const {id} = payload;

    yield call(api.post, `/students/${id}/checkins`);

    yield put(SignInCreators.signInSuccess());
  } catch (err) {
    console.tron.log(err);
    yield put(SignInCreators.signInFailure());
  }
}
