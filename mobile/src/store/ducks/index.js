import {combineReducers} from 'redux';

import signin from './signin';
import checkin from './checkin';

export default combineReducers({
  signin,
  checkin,
});
