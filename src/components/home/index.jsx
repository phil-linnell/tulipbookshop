import React from 'react';
import SignupContainer from '../../containers/signup';

function Home() {
  return (
    <div className="home">

      <h2 className="home__heading">We sell beautiful, <br />second-hand books.</h2>

      <p className="home__intro">
        We (Tully and Philip) love reading and collecting second-hand books, particularly penguins,
        world literature and vintage sci-fi. Find us at markets around London. <br />
        <span className="home__intro__layout-tweak">
          Say <a href="mailto:hello@tulipbookshop.com">hello@tulipbookshop.com</a> or follow
          us on instagram <a href="https://www.instagram.com/tulipbooks/">@tulipbooks</a>.
        </span>
      </p>

      <h2 className="home__news-title">
        <div className="home__news-title__heading">Our Tailored Book Package</div>
        <div className="home__news-title__coming-soon">Coming soon!</div>
      </h2>

      <div className="home__subscription-info">
        <div className="home__subscription-info__form">
          <i>Tell us</i> about your reading habits, tastes and interests...
        </div>
        <div className="home__subscription-info__hunt">
          We&apos;ll have a good think and search for your book <i>&apos;match&apos;</i>
        </div>
        <div className="home__subscription-info__pack">
          Then deliver your <i>personalised</i> book package (with extras).
        </div>
      </div>

      <SignupContainer />

    </div>
  );
}

module.exports = Home;
