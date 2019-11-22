import {all} from 'redux-saga/effects';

import sign from './sign/sagas';

export default function* rootSaga() {
  return yield all([sign]);
}
