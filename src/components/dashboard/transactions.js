import React, { Component } from 'react';

// Components
import Transaction from './transaction';

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [], isLoading: true };
  }

  componentDidMount() {
    const url = "https://box-expense-tracker.stamplayapp.com/api/cobject/v1/expense";
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        this.setState({isLoading: false});
        const data = jsonData.data;
        this.setState({transactions: data});
      })
  }

  render() {
    var { transactions, isLoading } = this.state;

    if (isLoading) {
      return (
        <h1>Loading...</h1>
      );
    } else {
      return (
        <div className="transactions-container">
          <div className="transactions-header">
            <h1>Transaction history</h1>
          </div>

          <div className="transaction-history">
            {transactions.map(index => {
              return (
                <Transaction key={index.id} title={index.description} amount={index.amount}/>
              );
            })}

          </div>
        </div>
      );

    }
  }
}
