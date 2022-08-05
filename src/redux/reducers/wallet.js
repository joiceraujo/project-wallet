import { ALLCURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ALLCURRENCIES:
    return { ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
