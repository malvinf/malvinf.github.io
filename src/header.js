import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const listMenu = ['home', 'about', 'skills', 'experience'];
  return (
    <section className="container navbar">
      <header>
        <div className="logo">
          <h1>Alvin!</h1>
        </div>
        <nav>
          <ul>
            {listMenu.map((name) => {
              return (
                <li>
                  <Link to={`/${name}`} key={name}>
                    <div className="navbar__menu">{name}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
