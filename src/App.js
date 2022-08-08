import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome, TrybeWallet</h1>
        <Switch>
          <Route path="/" component={ Login } exact />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </div>
    );
  }
}
export default App;
