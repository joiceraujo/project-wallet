import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

import getCoins from '../settings/getCoins';
import {
  getCoins as getCoinsAction,
  expenseAdd as expenseAddAction,
  changeRates as changeRatesAction,
  toEdit as toEditAction,
  expenseDelet as expenseDeletAction,
} from '../redux/actions';

const INITIAL_STATE = {
  id: '',
  value: '',
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
  exchangeRates: '',
};

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      ...INITIAL_STATE,
    };
  }

  componentDidMount() {
    const { getCurrenciesAct } = this.props;
    getCoins().then((response) => {
      getCurrenciesAct(Object.keys(response).filter((key) => key !== 'USDT'));
    });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  onClick = () => {
    const { expenses, expenseAdd } = this.props;
    const id = expenses.length;
    getCoins().then((response) => {
      this.setState({ exchangeRates: response, id }, () => {
        expenseAdd(this.state);
        this.setState({ ...INITIAL_STATE }, () => this.calculateTotal());
      });
    });
  }

  clickEdit = () => {
    const { expenses, toEdit, idToEdit, expenseAdd } = this.props;
    const newExpenses = expenses.map((obj) => {
      if (obj.id === idToEdit) {
        return this.state;
      }
      return obj;
    });
    expenseAdd(newExpenses);
    toEdit();
    this.setState({ ...INITIAL_STATE }, () => this.calculateTotal());
  }

  handleEdit = (id) => {
    const { expenses, toEdit } = this.props;
    const objToEdit = expenses.filter((obj) => obj.id === id)[0];
    toEdit();
    this.setState({ ...objToEdit });
  }

  handleDelete = (obj) => {
    const { expenseDelet } = this.props;
    expenseDelet(obj);
    this.calculateTotal();
    this.setState({}, () => this.calculateTotal());
  }

  calculateTotal = () => {
    const { changeRates, expenses } = this.props;
    const total = expenses.reduce((acc, curr) => (
      acc + (curr.exchangeRates[curr.currency].ask) * curr.value), 0).toFixed(2);
    changeRates(total);
  }

  render() {
    return (
      <>
        <Header />
        <WalletForm
          { ...this.state }
          handleChange={ this.handleChange }
          onClick={ this.onClick }
          clickEdit={ this.clickEdit }
        />
        <Table
          handleDelete={ this.handleDelete }
          handleEdit={ this.handleEdit }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesAct: (currencies) => dispatch(getCoinsAction(currencies)),
  expenseAdd: (expense) => dispatch(expenseAddAction(expense)),
  changeRates: (total) => dispatch(changeRatesAction(total)),
  expenseDelet: (obj) => dispatch(expenseDeletAction(obj)),
  toEdit: () => dispatch(toEditAction()),
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  idToEdit: PropTypes.string,
  getCoins: PropTypes.func,
  expenseAdd: PropTypes.func,
  changeRates: PropTypes.func,
  toEdit: PropTypes.func,
  expenseDelet: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
