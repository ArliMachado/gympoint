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

const INITIAL_STATE = {token: null, signed: false, loading: false};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGNIN_REQUEST:
        draft.loading = true;
        break;

      case Types.SIGNIN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case Types.SIGNIN_FAILURE: {
        draft.loading = false;
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
  authRequest: user => ({
    type: Types.SIGNIN_REQUEST,
    payload: {id},
  }),
  authSuccess: () => ({
    tyle: Types.SIGNIN_SUCCESS,
  }),
  authFailure: () => ({
    type: Types.SIGNIN_FAILURE,
  }),
};
