import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletAdd } from '../redux/actions/index';

  componentDidMount = () => {
    const { getCurrencie } = this.props;
    getCurrencie();
  };

  render() {
    const { walletCurrencies } = this.props;
    return (
      <div>
        <form>
          <input
            type="number"
            name="despesas"
            data-testid="value-input"
          />
          <input
            type="text"
            name="descriçao"
            data-testid="description-input"
          />
          <select data-testid="currency-input">
            {walletCurrencies.map((e, i) => <option key={ i } value={ e }>{e}</option>)}
          </select>
          <select
            name="tipos"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select
            name="categoria"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  walletCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencie: () => dispatch(walletAdd()),
});

WalletForm.propTypes = {
  walletCurrencies: PropTypes.arrayOf(PropTypes.object.string).isRequired,
  getCurrencie: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
