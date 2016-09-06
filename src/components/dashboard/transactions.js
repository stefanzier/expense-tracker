import React, { Component } from 'react';

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
