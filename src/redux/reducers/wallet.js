import { ALL_COINS, EXPENSES_ADD } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  infoCurrencies: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ALL_COINS:
    return { ...state,
      currencies: action.coin,
      infoCurrencies: action.infoAPI,
    };
  case EXPENSES_ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.stateForm],
    };
  default:
    return state;
  }
};

export default wallet;
