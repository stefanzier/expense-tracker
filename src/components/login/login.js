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
        <h1>$status</h1>

        <button className="login-button" onClick={this.boxLogin.bind(this)}>
          <a className="link">Log in with Box</a>
        </button>
      </div>
    );
  }
}
