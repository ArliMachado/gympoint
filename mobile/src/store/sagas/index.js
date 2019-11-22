import {all, takeLatest} from 'redux-saga/effects';

import {Types as SignInTypes} from '~/store/ducks/signin';
import {Types as CheckInTypes} from '~/store/ducks/checkin';

import {signIn} from './signin';
import {checkIn} from './checkin';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignInTypes.SIGNIN_REQUEST, signIn),

    takeLatest(CheckInTypes.CHECKIN_REQUEST, checkIn),
  ]);
}
