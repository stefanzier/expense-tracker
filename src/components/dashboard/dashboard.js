import React, { Component } from 'react';

// Components
import Overview from './overview';
import Transactions from './transactions';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Overview />
        <Transactions />
      </div>

    );
  }
}
