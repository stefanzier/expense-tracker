import React, { Component } from 'react';

// Components
import Transaction from './transaction';

export default class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getDate() {

  }

  render() {
    return (
      <div className="transactions-container">
        <div className="transactions-header">
          <h1>Transaction history</h1>
        </div>

        <div className="transaction-history">
          <Transaction title="AWS Monthly Billing *7812" amount="-$230.46"/>
        </div>
      </div>
    );
  }
}
