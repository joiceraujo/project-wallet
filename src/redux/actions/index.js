export const EMAIL_ADD = 'EMAIL_ADD';
export const ALL_COINS = 'ALL_COINS';

export const emailAdd = (email) => ({
  type: EMAIL_ADD,
  payload: email,
});

export const allCoins = (coin, infoAPI) => ({
  type: ALL_COINS,
  coin,
  infoAPI });

export function fetchCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((responseJson) => {
      delete responseJson.USDT;
      const a = Object.keys(responseJson);
      const infoAPI = responseJson;
      dispatch(allCoins(a, infoAPI));
    });
}

export const EXPENSES_ADD = 'EXPENSES_ADD';

export const expensesAdd = (stateForm) => ({
  type: EXPENSES_ADD,
  stateForm,
});
