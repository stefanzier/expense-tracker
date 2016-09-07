import React, { Component } from 'react';

// Styles
import '../../styles/login.css';



export default class Login extends Component {
  boxLogin() {
    console.log("box login called");
    Stamplay.User.socialLogin("auth0");
  }

  render() {



    return (
      <div className="login-container">
        <div className="brand-container">
          <h1 className="login-title">$status</h1>
          <p className="login-title">Financial Insight analysis for your organization</p>
        </div>

        <div className="button-container">
          <button className="login-button" onClick={this.boxLogin.bind(this)}>
            <a className="link">Log in with Box</a>
          </button>
        </div>
      </div>
    );
  }
}
