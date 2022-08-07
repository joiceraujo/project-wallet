import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailAdd } from '../redux/actions';

class Login extends React.Component {
    state = {
      email: '',
      password: '',
    }

 validateEmail = () => {
   const { email, password } = this.state;
   const number = 5;
   const example = /\S+@\S+\.\S+/;
   return !(example.test(email) && password.length > number);
 }

  onClick = (event) => {
    const { emailId, history } = this.props;
    const { email } = this.state;
    event.preventDefault();
    emailId(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        Login
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              placeholder="Digite seu email"
              data-testid="email-input"
              onChange={
                (event) => this.setState({
                  email: event.target.value,
                })
              }
              value={ email }
            />
          </label>
          <label htmlFor="passwordInput">
            <input
              type="password"
              placeholder="Digite sua senha"
              data-testid="password-input"
              onChange={
                (event) => this.setState({
                  password: event.target.value,
                })
              }
              value={ password }
            />
          </label>
          <button
            type="submit"
            disabled={ this.validateEmail() }
            onClick={ (event) => this.onClick(event) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  emailId: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
