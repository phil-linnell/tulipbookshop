import React from 'react';
import SignupContainer from '../../containers/signup';

function Home() {
  return (
    <div className="home">

      <h2 className="home__heading">We sell beautiful, <br />second-hand books.</h2>

      <p className="home__intro">
        We (Tully and Philip) love reading and collecting second-hand books, particularly penguins,
        world literature and vintage sci-fi. Find us at markets around <b>London</b>. <br />
        <span className="home__intro__layout-tweak">
          Send us a message on instagram <a href="https://www.instagram.com/tulipbooks/">@tulipbooks</a>!
        </span>
      </p>

      <h2 className="home__news-title">
        <div className="home__news-title__heading">
          Our Tailored Book Package personalised for you
        </div>
        <div className="home__news-title__coming-soon">Coming soon!</div>
      </h2>

      <div className="home__subscription-info">
        <div className="home__subscription-info__form">
          <i>Tell us</i> about your reading habits, tastes and interests...
        </div>
        <div className="home__subscription-info__hunt">
          We&apos;ll have a good think and search for your book <i>&apos;match&apos;</i>...
        </div>
        <div className="home__subscription-info__pack">
          Then send your <i>unique</i> book package with bonus extras.
        </div>
      </div>

      <SignupContainer />

    </div>
  );
}

module.exports = Home;
