import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const useTitle = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const listMenu = ['home', 'about', 'skills', 'experience'];
    document.title = `Alvin! - ${listMenu[idx]}`;
  }, [idx]);

  return [idx, setIdx];
};

const Header = () => {
  const listMenu = ['home', 'about', 'skills', 'experience'];
  const [idx, setIdx] = useTitle();
  return (
    <section className="container navbar">
      <header>
        <div className="logo">
          <h1>Alvin!</h1>
        </div>
        <nav>
          <ul>
            {listMenu.map((name, index) => {
              return (
                <li key={idx + name}>
                  <Link
                    to={`/${name}`}
                    onClick={() => {
                      return setIdx(index);
                    }}
                  >
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
