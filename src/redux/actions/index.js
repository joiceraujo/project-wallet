export const EMAIL_ADD = 'EMAIL_ADD';
export const ALLCURRENCIES = 'ALLCURRENCIES';

export const emailAdd = (payload) => ({
  type: EMAIL_ADD,
  payload,
});

export const allCurrencies = (payload) => ({
  type: ALLCURRENCIES,
  payload,
});

export const walletAdd = () => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resulted = await api.json();
  const data = Object.keys(resulted);
  const currenciesAll = data.filter((e) => e !== 'USDT');
  dispatch(allCurrencies(currenciesAll));
};
