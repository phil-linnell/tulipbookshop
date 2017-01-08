import React from 'react';

function Header() {
  return (
    <header className="header">

      <h1 className="header__logo">
        <img src="/assets/images/logo-tulip.png" alt="" />Tulip Bookshop
      </h1>
      <div className="header__extra">
        <b>Next Stall:</b> <a href="https://www.facebook.com/events/1638731976424757/">
        Abney Hall, 73A Stoke Newington Church Stree on 5th February</a>
      </div>

    </header>
  );
}

module.exports = Header;
