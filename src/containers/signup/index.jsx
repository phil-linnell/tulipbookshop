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
      status: 'ready',
      errorMessage: '',
    };

    this.validateEmail = this.validateEmail.bind(this);
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

  validateEmail(email) {
    this.re = /\S+@\S+\.\S+/;
    return this.re.test(email);
  }

  handleClick() {
    this.setState({ status: 'sending' });

    setTimeout(() => {
      if (this.validateEmail(this.state.email)) {
        this.firebaseRefs.signup.push(this.state.email, (error) => {
          if (error) {
            this.setState({
              status: 'error',
              errorMessage: error,
            });
            return;
          }
          this.setState({
            status: 'success',
          });
        });
      } else {
        this.setState({
          status: 'error',
          errorMessage: 'Invalid email address',
        });
      }
    }, 1000);
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
        status={this.state.status}
        errorMessage={this.state.errorMessage}
      />
    );
  }

}

reactMixin(SignupContainer.prototype, ReactFire);

export default SignupContainer;
