export const Types = {
  NEW_CHECKIN_REQUEST: '@checkin/NEW_CHECK_IN_REQUEST',
  NEW_CHECKIN_SUCCESS: '@checkin/NEW_CHECK_IN_SUCCESS',
  GET_CHECKIN_REQUEST: '@checkin/GET_CHECK_IN_REQUEST',
  GET_CHECKIN_SUCCESS: '@checkin/GET_CHECK_IN_SUCCESS',

  CHECKIN_FAILURE: '@checkin/CHECK_IN_FAILURE',
};

export function checkinRequest(id) {
  return {
    type: Types.NEW_CHECKIN_REQUEST,
    payload: {id},
  };
}

export function checkinSuccess() {
  return {
    type: Types.NEW_CHECKIN_SUCCESS,
  };
}

export function getCheckinRequest(id) {
  return {
    type: Types.GET_CHECKIN_REQUEST,
    payload: {id},
  };
}

export function getCheckinSuccess(data) {
  return {
    type: Types.GET_CHECKIN_SUCCESS,
    payload: {data},
  };
}
export function checkinFailure() {
  return {
    type: Types.CHECKIN_FAILURE,
  };
}
