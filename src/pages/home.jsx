/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import accountList from '../assets/data/accountList';

const photo = require('../assets/img/foto.png');

const Home = () => {
  return (
    <section className="container main">
      <div className="main__text">
        <h1>
          Hi,
          <br />
          Im <span className="text--name">Alvin </span>!
        </h1>
        <p>Front-End Developer.</p>
        <div className="main__contact">
          {accountList.map((acc) => {
            return (
              <a
                href={acc.accountLink}
                target="_blank"
                rel="noopener noreferrer"
                key={acc.accountName}
              >
                <i className={`fab fa-${acc.accountName}`} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="main__img">
        <img src={photo} alt="" />
      </div>
    </section>
  );
};

export default Home;
