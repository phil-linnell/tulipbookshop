import React from 'react';

function Signup(props) {
  return (
    <div className="signup">

      <input
        value={props.email}
        onChange={props.onEmailInput}
        type="text"
        placeholder="Email"
      />
      <button
        onClick={props.onSubmit}
        type="button"
      >
        Submit
      </button>

    </div>
  );
}

Signup.propTypes = {
  email: React.PropTypes.string,
  onEmailInput: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
};

module.exports = Signup;
