import React from 'react';
import propType from 'prop-types';
import { connect } from 'react-redux';
import { emailAdd } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  enable = () => {
    const five = 5;
    const { password, email } = this.state;
    const example = /\S+@\S+\.\S+/;
    if (example.test(email) && password.length > five) return false;
    return true;
  }

  handleChance = (event) => {
    const { email } = this.state;
    const { emailId, history } = this.props;
    event.preventDefault();
    emailId(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <input
          type="email"
          placeholder="example@example.com"
          data-testid="email-input"
          onChange={ (event) => this.setState({
            email: event.target.value,
          }) }
          value={ email }
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
          onChange={ (event) => this.setState({
            password: event.target.value,
          }) }
          value={ password }
        />
        <button
          type="submit"
          disabled={ this.enable() }
          onClick={ (event) => this.handleChance(event) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailId: (payload) => dispatch(emailAdd(payload)),
});

Login.propTypes = {
  emailId: propType.func.isRequired,
  history: propType.objectOf(propType.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
