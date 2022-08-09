import {
  GET_COINS,
  EXPENSE_ADD,
  CHANGE_RATES,
  EXPENSE_DELET,
  EXPENSE_EDIT,
  TO_EDIT,
} from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  total: 0,
};

const waletReducer = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case EXPENSE_ADD:
    return {
      ...state,
      expenses: state.editor
        ? [...action.expenses] : [...state.expenses, action.expenses],
    };
  case CHANGE_RATES:
    return {
      ...state,
      total: action.total,
    };
  case EXPENSE_DELET:
    return {
      ...state,
      expenses: state.expenses
        .filter((item) => item.id !== action.expenseToDelete.id),
    };
  case EXPENSE_EDIT:
    return {
      ...state,
      idToEdit: action.idToEdit,
    };
  case TO_EDIT:
    return {
      ...state,
      editor: !state.editor,
    };
  default:
    return state;
  }
};

export default waletReducer;
