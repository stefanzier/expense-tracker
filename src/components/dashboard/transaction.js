import React, { Component } from 'react';

// Styles
import '../../styles/dashboard.css';

export default class Transaction extends Component {

  render() {
    return (
      <div className="transaction-container">
        <div className="transaction-title-container">
          <h5 className="transaction-title">{this.props.title}</h5>
        </div>
        <div className="transaction-amount-container">
          <h5 className="transaction-amount">{this.props.amount}</h5>
        </div>
      </div>
    );
  }
}
