"use strict";

import React, { Component } from 'react';

export default class Signup extends Component {

  render() {
    return (
      <div className="signup">

        <input
          value={this.props.email}
          onChange={this.props.onEmailInput}
          type="text"
          placeholder="Email" />
        <button
          onClick={this.props.onSubmit}
          type="button">
          Submit
        </button>
        
      </div>
    );
  }

}
