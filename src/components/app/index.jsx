import React from 'react';
import Header from '../header';
import Home from '../home';

function App() {
  return (
    <div className="app">

      <Header />

      <div className="app__content">
        <Home />
      </div>

    </div>
  );
}

module.exports = App;
