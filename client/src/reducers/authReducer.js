import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  AUTH_USER,
  LOGIN_FAILURE,
  VERIFY_ACCOUNT_ERROR
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, signup: true, error: {} };
    case SIGNUP_FAILURE:
      return { ...state, signup: false, error: { signupResend: action.payload } };
    case AUTH_USER:
      return { ...state, authenticated: true, error: {} };
    case LOGIN_FAILURE:
      return { ...state, error: { login: action.payload } };
    case VERIFY_ACCOUNT_ERROR:
      return { ...state, signup: true, error: { verifyAccount: action.payload } };
  }

  return state;
}