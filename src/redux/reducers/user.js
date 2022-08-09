import { EMAIL_ADD } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};
function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_ADD:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
