import React, { Component } from 'react';
import propType from 'prop-types';
import { connect } from 'react-redux';

  return (
    <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }

export default connect(mapStateToProps)(Header);
