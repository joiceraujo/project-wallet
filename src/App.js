import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './index.css';

function App() {
  return (
    <div>
      Welcome, TrybeWallet!
      <Switch>
        <Route path="/" component={ Login } exact />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </div>);
}

export default App;
