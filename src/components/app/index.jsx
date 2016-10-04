import React from 'react';
import SignupContainer from '../../containers/signup';

function App() {
  const submitted = localStorage.getItem('submitted');
  let content;
  if (!submitted) {
    content = (
      <div className="submitted">Already submitted</div>
    );
  } else {
    content = (
      <SignupContainer />
    );
  }

  return (
    <div className="app">

      <h1><img src="/assets/images/logo-tulip.png" alt="" />Tulip Bookshop</h1>

      {content}

    </div>
  );
}

module.exports = App;
