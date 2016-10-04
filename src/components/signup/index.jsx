import React from 'react';
import Spinner from '../spinner';

function renderError(status, errorMessage) {
  let message;
  if (status === 'error') {
    message = (
      <div className="error-message">{errorMessage}</div>
    );
  }
  return message;
}

function Signup({ email, onEmailInput, onSubmit, status, errorMessage }) {
  const classes = `signup signup--status-${status}`;

  return (
    <div className={classes}>

      <input
        value={email}
        onChange={onEmailInput}
        type="text"
        placeholder="Type your email"
        className="signup__email-input"
      />
      <button
        onClick={onSubmit}
        type="button"
        className="signup__submit-button"
      >
        Submit
      </button>
      <div className="signup__status-icon">
        <Spinner />
      </div>

      {renderError(status, errorMessage)}

    </div>
  );
}

Signup.propTypes = {
  email: React.PropTypes.string,
  onEmailInput: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  status: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
};

module.exports = Signup;
