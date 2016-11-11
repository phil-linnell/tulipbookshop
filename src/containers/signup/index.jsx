import React, { Component } from 'react';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import reactMixin from 'react-mixin';

import Signup from '../../components/signup';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function handleInputChange(component) {
  return (event) => {
    component.setState({ email: event.target.value });
  };
}

function handleClick(component) {
  return (event) => {
    event.preventDefault();

    component.setState({ status: 'sending' });

    setTimeout(() => {
      if (validateEmail(component.state.email)) {
        component.firebaseRefs.signup.push(component.state.email, (error) => {
          if (error) {
            component.setState({
              status: 'error',
              errorMessage: error,
            });
            return;
          }
          component.setState({ status: 'success' });
        });
      } else {
        component.setState({
          status: 'error',
          errorMessage: 'Invalid email address',
        });
      }
    }, 750); /* Just add a bit of time to satiate my appetite for spinners! */
  };
}

class SignupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      status: 'ready',
      errorMessage: '',
    };
  }


  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB9XgiyKDaX9voc38gTxAAZJ2EzR4pWIEU',
      authDomain: 'tulipbookshop-2b750.firebaseapp.com',
      databaseURL: 'https://tulipbookshop-2b750.firebaseio.com',
      storageBucket: 'tulipbookshop-2b750.appspot.com',
      messagingSenderId: '900930616506',
    };

    firebase.initializeApp(config);

    firebase.auth().signInAnonymously().catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });

    const ref = firebase.database().ref('signup');
    this.bindAsArray(ref, 'signup');
  }

  render() {
    const { email, status, errorMessage } = this.state;

    return (
      <Signup
        onEmailInput={handleInputChange(this)}
        onSubmit={handleClick(this)}
        email={email}
        status={status}
        errorMessage={errorMessage}
      />
    );
  }

}

reactMixin(SignupContainer.prototype, ReactFire);

export default SignupContainer;
