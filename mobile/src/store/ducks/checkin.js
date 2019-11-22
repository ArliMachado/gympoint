import produce from 'immer';

/**
 * Action Types
 */

export const Types = {
  CHECKIN_REQUEST: '@checkin/CHECK_IN_REQUEST',
  CHECKIN_SUCCESS: '@checkin/CHECK_IN_SUCCESS',
  CHECKIN_FAILURE: '@checkin/CHECK_IN_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {student_id: null, signed: false, loading: false};

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.CHECKIN_REQUEST:
        draft.student_id = action.payload.id;
        draft.loading = true;
        break;

      case Types.CHECKIN_SUCCESS: {
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case Types.CHECKIN_FAILURE: {
        draft.loading = false;
        draft.student_id = null;
        break;
      }
      default:
        break;
    }
  });
}

/**
 * Action Creators
 */

export const Creators = {
  checkinRequest: id => ({
    type: Types.CHECKIN_REQUEST,
    payload: {id},
  }),
  checkinSuccess: () => ({
    type: Types.CHECKIN_SUCCESS,
  }),
  checkinFailure: () => ({
    type: Types.CHECKIN_FAILURE,
  }),
};
