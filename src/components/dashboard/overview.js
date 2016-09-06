import React, { Component } from 'react';

// Styles
import '../../styles/dashboard.css';

export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="overview-container">
        <div className="overview-item">
          <h1>$200.54</h1>
          <p>Last Transfer</p>
        </div>

        <div className="overview-item">
          <h1>$500.66</h1>
          <p>Spent This Month</p>
        </div>

        <div className="overview-item">
          <h1>2,314</h1>
          <p>Transactions</p>
        </div>
      </div>
    );
  }
}
