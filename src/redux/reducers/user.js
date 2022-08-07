const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_ADD:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
