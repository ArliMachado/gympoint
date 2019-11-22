import produce from 'immer';

/**
 * Action Types
 */

export const Types = {
  SIGNIN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGNIN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGNIN_FAILURE: '@auth/SIGN_IN_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {student_id: null, signed: false, loading: false};

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGNIN_REQUEST:
        draft.student_id = action.payload.id;
        draft.loading = true;
        break;

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

/**
 * Action Creators
 */

export const Creators = {
  signInRequest: id => ({
    type: Types.SIGNIN_REQUEST,
    payload: {id},
  }),
  signInSuccess: () => ({
    type: Types.SIGNIN_SUCCESS,
  }),
  signInFailure: () => ({
    type: Types.SIGNIN_FAILURE,
  }),
};
