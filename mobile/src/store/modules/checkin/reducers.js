import produce from 'immer';

import {Types as CheckinTypes} from './actions';

const INITIAL_STATE = {checkins: [], loading: false};

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CheckinTypes.NEW_CHECKIN_REQUEST: {
        draft.loading = true;
        break;
      }

      case CheckinTypes.NEW_CHECKIN_SUCCESS: {
        draft.loading = false;
        break;
      }

      case CheckinTypes.GET_CHECKIN_REQUEST: {
        draft.loading = true;
        break;
      }
      case CheckinTypes.GET_CHECKIN_SUCCESS: {
        draft.loading = false;
        draft.checkins = action.payload.data;
        break;
      }

      case CheckinTypes.CHECKIN_FAILURE: {
        draft.loading = false;
        draft.student_id = null;
        break;
      }
      default:
    }
  });
}
