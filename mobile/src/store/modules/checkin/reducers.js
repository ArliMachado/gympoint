import produce from 'immer';

import {Types as CheckinTypes} from './actions';

const INITIAL_STATE = {student_id: null, signed: false, loading: false};

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CheckinTypes.CHECKIN_REQUEST: {
        draft.student_id = action.payload.id;
        draft.loading = true;
        break;
      }

      case CheckinTypes.CHECKIN_SUCCESS: {
        draft.loading = false;
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
