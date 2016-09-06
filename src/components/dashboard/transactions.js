import React, { Component } from 'react';

// Components
import Transaction from './transaction';

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const url = "https://box-expense-tracker.stamplayapp.com/api/cobject/v1/expense";
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        console.log(jsonData) 

        // randomIds.forEach(randomId => {
        //   walls.push(jsonData[randomId]);
        // });

        this.setState({
          isLoading: false,
          transactions: jsonData.data,
        });  

      })
      .catch( err => console.log("Fetch error: " + err) );
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
