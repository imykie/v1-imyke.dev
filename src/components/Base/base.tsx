import React from 'react';
import { Link } from 'react-router-dom';
import './base.scss';
import avi from '../../assets/svgs/avi.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import logo from '../../assets/svgs/avismall.svg';
import arrow from '../../assets/svgs/arrow.svg';

export default function Base({ menu }: any) {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello! I'm <br /> Michael Olatunji.
          </h1>
          <div className="avi">{/* <img src={avi} alt="avatar" /> */}</div>
        </div>

        <div className="description">
          <p>
            <span>
              I'm a <span className="highlight">Software Engineer</span>. I like to craft solid and scalable products
              with great user experiences.
            </span>
            {/* <span className="highlight">Javascript</span> */}
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/projects">
            <button className="explore">Explore ➜</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet" /> PROJECTS
              </Link>
            </small>
          </li>

          <li className={menu[1]}>
            <small>
              02
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>

          <li className={menu[2]}>
            <small>
              03
              <Link to="/contact">
                <img src={navLine} alt="menu bullet" /> CONTACT
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        {/* <img src={logo} alt="" /> */}
        <div className="social">
          <a href="https://github.com/MichaelOlatunji" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a href="https://twitter.com/_imyke" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter <img src={arrow} alt="pointer" />
          </a>

          <a href="https://linkedin.com/in/imykel" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
