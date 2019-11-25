export const Types = {
  CHECKIN_REQUEST: '@checkin/CHECK_IN_REQUEST',
  CHECKIN_SUCCESS: '@checkin/CHECK_IN_SUCCESS',
  CHECKIN_FAILURE: '@checkin/CHECK_IN_FAILURE',
};

export function checkinRequest(id) {
  return {
    type: '@checkin/CHECK_IN_REQUEST',
    payload: {id},
  };
}

export function checkinSuccess() {
  return {
    type: '@checkin/CHECK_IN_SUCCESS',
  };
}
export function checkinFailure() {
  return {
    type: '@checkin/CHECK_IN_FAILURE',
  };
}
