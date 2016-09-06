import React, { Component } from 'react';

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
          <div className="transaction">
            {
              // this.state.transactions.map((transaction)=>{
              //   <Transaction amount="transaction.amount" description="transaction.description" />
              // });
            }
          </div>
        </div>
      </div>
    );
  }
}
