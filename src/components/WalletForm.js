import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, expensesAdd } from '../redux/actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  id: 0,
};

class WalletForm extends Component {
  state = {
    ...INITIAL_STATE,
  }

componentDidMount = () => {
  const { currenciesDispach } = this.props;
  currenciesDispach();
}

handleChange = ({
  target: { name, value } }) => this.setState({ [name]: value });

onClick = () => {
  const { currenciesDispach, expensesDispach, exchangeRates } = this.props;
  currenciesDispach();
  expensesDispach({ ...this.state, exchangeRates });

  this.setState = ({
    ...INITIAL_STATE,
  });
}

render() {
  const { walletCurrencies } = this.props;
  const { value, description, currency, method, tag } = this.state;
  return (
    <div>
      <form>
        Valor:
        <input
          type="number"
          value={ value }
          name="value"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
        Descrição:
        <input
          type="text"
          name="description"
          value={ description }
          data-testid="description-input"
          onChange={ this.handleChange }
        />
        Moeda:
        <select
          name="currency"
          data-testid="currency-input"
          value={ currency }
          onChange={ this.handleChange }
        >
          {(walletCurrencies).map((option) => (
            <option
              key={ option }
            >
              { option}
            </option>))}
        </select>
        <select
          name="method"
          value={ method }
          onChange={ this.handleChange }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.onClick }
        >
          Adicionar Despesas
        </button>
      </form>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  walletCurrencies: state.wallet.currencies,
  exchangeRates: state.wallet.infoCurrencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesDispach: () => dispatch(fetchCurrencies()),
  expensesDispach: (expenses) => dispatch(expensesAdd(expenses)),
});

WalletForm.propTypes = {
  currenciesDispach: PropTypes.func,
  walletCurrencies: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
