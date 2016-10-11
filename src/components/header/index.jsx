import React from 'react';

function Header() {
  return (
    <header className="header">

      <h1 className="header__logo">
        <img src="/assets/images/logo-tulip.png" alt="" />Tulip Bookshop
      </h1>
      <div className="header__extra">
        <b>Next Stall:</b> <a href="http://www.hackneyfleamarket.com/calendar/2016/10/30/the-old-dalston-market">
        The Old Dalston Market @ Epic Dalston on 30th October</a>
      </div>

    </header>
  );
}

module.exports = Header;
