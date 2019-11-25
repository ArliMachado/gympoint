export const Types = {
  SIGNIN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGNIN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGNIN_FAILURE: '@auth/SIGN_IN_FAILURE',
};

export function signInRequest(id) {
  return {
    type: Types.SIGNIN_REQUEST,
    payload: {id},
  };
}

export function signInSuccess() {
  return {
    type: Types.SIGNIN_SUCCESS,
  };
}

export function signInFailure() {
  return {
    type: Types.SIGNIN_FAILURE,
  };
}
