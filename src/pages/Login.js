import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailAdd } from '../redux/actions/index';

class Login extends React.Component {
    state = {
      email: '',
      password: '',
      disable: true,
    }

    onChangeInput = ({ target }) => {
      const { name, value } = target;

      this.setState({
        [name]: value,
      }, () => { this.validateEmail(); });
    };

 validateEmail = () => {
   const { email, password } = this.state;
   const number = 6;
   const example = /\S+@\S+\.\S+/;
   if (password.length >= number && example.test(email)) {
     this.setState({
       disable: false,
     }, () => {});
   } else {
     this.setState({
       disable: true,
     });
   }
 }

  onClick = (event) => {
    const { emailId, history } = this.props;
    const { email } = this.state;
    event.preventDefault();
    emailId(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <div>
        Login
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              data-testid="email-input"
              value={ email }
              onChange={ this.onChangeInput }
            />
          </label>
          <label htmlFor="passwordInput">
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              data-testid="password-input"
              value={ password }
              onChange={ this.onChangeInput }
            />
          </label>
          <button
            type="button"
            disabled={ disable }
            onClick={ this.onClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailId: (acessoEmail) => dispatch(emailAdd(acessoEmail)),
});

Login.propTypes = {
  emailId: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
