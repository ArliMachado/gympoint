import {combineReducers} from 'redux';

import sign from './sign/reducers';
import checkin from './checkin/reducers';

export default combineReducers({
  sign,
  checkin,
});
