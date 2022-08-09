export const EMAIL_ADD = 'EMAIL_ADD';
export const GET_COINS = 'GET_COINS';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const CHANGE_RATES = 'CHANGE_RATES';
export const EXPENSE_DELET = 'EXPENSE_DELET';
export const EXPENSE_EDIT = 'EXPENSE_EDIT';
export const TO_EDIT = 'TO_EDIT';

export const emailAdd = (email) => ({
  type: EMAIL_ADD,
  email,
});

export const getCoins = (currencies) => ({
  type: GET_COINS,
  currencies,
});

export const expenseAdd = (expenses) => ({
  type: EXPENSE_ADD,
  expenses,
});

export const changeRates = (total) => ({
  type: CHANGE_RATES,
  total,
});

export const expenseDelet = (obj) => ({
  type: EXPENSE_DELET,
  expenseToDelete: obj,
});

export const expenseEdit = (id) => ({
  type: EXPENSE_EDIT,
  idToEdit: id,
});

export const toEdit = () => ({
  type: 'TO_EDIT',
});
