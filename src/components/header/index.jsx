import React from 'react';

function Header() {
  return (
    <header className="header">

      <h1 className="header__logo">
        <img src="/assets/images/logo-tulip.png" alt="" />Tulip Bookshop
      </h1>
      <div className="header__extra">
        <b>Next Stall:</b> <a href="https://www.facebook.com/events/244629595952796/">
        Christmas Market @ Gallery Cafe/St Margaret&apos;s House on 3rd December</a>
      </div>

    </header>
  );
}

module.exports = Header;
