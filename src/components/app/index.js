"use strict";

import React, { Component } from 'react';

import SignupContainer from '../../containers/signup';

export default class App extends Component {

  render() {
    return (
      <div className="app">

        <h1><img src="/assets/images/logo-tulip.png" alt="" />Tulip Bookshop</h1>
        <p>Coming soon</p>
        <p>tulipbookbox@gmail.com</p>

        <SignupContainer />

      </div>
    );
  }

}
