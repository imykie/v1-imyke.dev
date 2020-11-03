import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Utils/Form/form';
import './contact.scss';

interface IProp {
  menu?: string[];
  activeMenu: (arg: number) => void;
}

export default function Contact(props: IProp) {
  useEffect(() => {
    props.activeMenu(2);
  }, []);

  return (
    <div className="contact">
      <Form />
      <div className="go_button_container">
        <Link to="/projects">
          <button>
            <b>➜ </b> Work
          </button>
        </Link>
        <Link to="/resume">
          <button> Resume ➜ </button>
        </Link>
      </div>
    </div>
  );
}
