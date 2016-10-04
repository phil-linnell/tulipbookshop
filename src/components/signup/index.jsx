import React from 'react';
import Spinner from '../spinner';

function Signup({ email, onEmailInput, onSubmit, status, errorMessage }) {
  const classes = `signup signup--status-${status}`;

  return (
    <div className={classes}>

      <form className="signup__form">
        <input
          value={email}
          onChange={onEmailInput}
          type="text"
          placeholder="Enter your email and we&apos;ll let you know when we launch!"
          className="signup__email-input"
        />
        <button
          onClick={onSubmit}
          type="button"
          className="signup__submit-button"
        >
          { status === 'sending' || status === 'success' ? <Spinner /> : 'Submit' }
        </button>

        <div className="signup__registered">
          Thanks for your interest! You&apos;ll be one of the first to know when we launch!
        </div>

      </form>


      <div className="signup__error-message">
        { status === 'error' ? errorMessage : '' }
      </div>

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
