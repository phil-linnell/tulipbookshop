"use strict";

import React, { Component } from 'react';
import firebase from 'firebase';
import ReactFire, { bindAsObject } from 'reactfire';
import reactMixin from 'react-mixin';

import Signup from '../../components/signup';

class SignupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  componentWillMount() {

    const config = {
      apiKey: "AIzaSyB9XgiyKDaX9voc38gTxAAZJ2EzR4pWIEU",
      authDomain: "tulipbookshop-2b750.firebaseapp.com",
      databaseURL: "https://tulipbookshop-2b750.firebaseio.com",
      storageBucket: "tulipbookshop-2b750.appspot.com"
    };

    firebase.initializeApp(config);

    var ref = firebase.database().ref("signup");
    this.bindAsArray(ref, "signup");
  }

  render() {

    return (
      <Signup
        email={this.state.email}
        onEmailInput={this.handleInputChange.bind(this)}
        onSubmit={this.handleClick.bind(this)} />
    );
  }

  handleClick(email) {
    this.firebaseRefs.signup.push(this.state.email);
    this.setState({
      email: ''
    });
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }

}

reactMixin(SignupContainer.prototype, ReactFire);

export default SignupContainer;
