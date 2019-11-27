import produce from 'immer';

import {Types} from './actions';

const INITIAL_STATE = {student_id: null, signed: false, loading: false};

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGNIN_REQUEST: {
        draft.student_id = action.payload.id;
        draft.loading = true;
        break;
      }

      case Types.SIGNIN_SUCCESS: {
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case Types.SIGNIN_FAILURE: {
        draft.loading = false;
        draft.signed = false;
        draft.student_id = null;
        break;
      }
      default:
    }
  });
}
