import React, { Component } from 'react';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import reactMixin from 'react-mixin';

import Signup from '../../components/signup';

class SignupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB9XgiyKDaX9voc38gTxAAZJ2EzR4pWIEU',
      authDomain: 'tulipbookshop-2b750.firebaseapp.com',
      databaseURL: 'https://tulipbookshop-2b750.firebaseio.com',
      storageBucket: 'tulipbookshop-2b750.appspot.com',
    };

    firebase.initializeApp(config);

    const ref = firebase.database().ref('signup');
    this.bindAsArray(ref, 'signup');
  }

  handleClick() {
    this.firebaseRefs.signup.push(this.state.email);
    this.setState({
      email: '',
    });
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <Signup
        email={this.state.email}
        onEmailInput={this.handleInputChange}
        onSubmit={this.handleClick}
      />
    );
  }

}

reactMixin(SignupContainer.prototype, ReactFire);

export default SignupContainer;
