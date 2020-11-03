import React, { Component, useState } from 'react';
import logo from '../../../assets/svgs/logo.svg';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const toggleMenu = () => setIsClosed(!isClosed);

  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="logo_container">
          <Link to="/">
            <span className="pt-4 pl-4 text-xl font-bold">
              <img className="w-32" src={logo} alt="imyke logo" />
            </span>
          </Link>
        </div>

        <div className="menu_btn_wrapper">
          <button className={isClosed ? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={toggleMenu}>
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </button>
        </div>
      </div>

      {!isClosed ? (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={toggleMenu}>
                  Résumé
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="social_box">
              <h3>Connect With Me</h3>
              <div className="social_icons">
                <a href="https://github.com/MichaelOlatunji">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/_imyke">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/imykel/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        ''
      )}
    </div>
  );
}
