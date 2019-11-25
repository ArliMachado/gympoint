import {all} from 'redux-saga/effects';

import sign from './sign/sagas';
import checkin from './checkin/sagas';

export default function* rootSaga() {
  return yield all([sign, checkin]);
}
