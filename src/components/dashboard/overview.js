import React, { Component } from 'react';

export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="overview-container">
        <div className="overview-item">
          <h1>Item 1</h1>
        </div>

        <div className="overview-item">
          <h1>Item 2</h1>
        </div>

        <div className="overview-item">
          <h1>Item 3</h1>
        </div>
      </div>
    );
  }
}
