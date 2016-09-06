import React, { Component } from 'react';

// Components
import Overview from './overview';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Overview />
    );
  }
}
