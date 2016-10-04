import React from 'react';

function Header() {
  return (
    <header className="header">

      <h1 className="header__logo">
        <img src="/assets/images/logo-tulip.png" alt="" />Tulip Bookshop
      </h1>
      <div className="header__extra">
        <b>Next:</b> 9th October @ Abney Hall, 73a Stoke Newington Church Street
      </div>

    </header>
  );
}

module.exports = Header;
