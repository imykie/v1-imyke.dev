import React, { Component, useEffect } from 'react';
import Helmet from '../Utils/SEO/helmet';
import { Link } from 'react-router-dom';
import './projects.scss';
import Project from '../Utils/Project/project';
import { v4 as uuid } from 'uuid';

interface IProject {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
}

interface IProp {
  menu?: string[];
  activeMenu: (arg: number) => void;
}

const projects: IProject[] = [
  {
    id: uuid(),
    title: 'imyke.dev',
    description: 'My Portfolio Website',
    github: 'https://github.com/MichaelOlatunji/imyke.dev',
    live: 'https://imyke.dev',
    stack: 'React + TypeScript + SASS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Afide',
    description: 'Agricultural financial inclusion for daily earners',
    github: '',
    live: 'https://afide.ng',
    stack: 'Vue + Nodejs + MySQL',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Brandzoos',
    description: 'A platform for brands and shoppers',
    github: '',
    live: 'https://brandzoos.com',
    stack: 'React + TypeScript + GraphQL + Nestjs + Postgres',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Listed.ng',
    description: 'A platform to find and connect with businesses',
    github: '',
    live: 'https://listed.ng/',
    stack: 'React + TypeScript + GraphQL + Nestjs + Postgres',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Realtime Form',
    description: 'A single page app that sync with firestore in realtime',
    github: 'https://github.com/MichaelOlatunji/realtime-form-sync-firestore',
    live: 'https://realtime-form-sync.netlify.app',
    stack: 'Vue + TypeScript + Vuex + Vuexfire + Firestore',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Capstone Project',
    description: 'Cloud DevOps Nanodegree Capstone Project (Udacity)',
    github: 'https://github.com/MichaelOlatunji/Cloud_DevOps_Nanodegree_Capstone',
    live: '',
    stack: 'AWS + Jenkins + Docker + Kubernetes + Python',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Operationalized ML API',
    description: 'Automated CI-CD pipeline for ML API that predicts housing price in Boston',
    github: 'https://github.com/MichaelOlatunji/operationalize-ML-api',
    live: '',
    stack: 'Flask + AWS + Jenkins + Docker + Kubernetes + Circle CI',
    isPrivate: false,
    isLive: false,
  },
  // {
  //   id: uuid(),
  //   title: 'Banking App',
  //   description: 'A demo bank application that performs basic bank transactions',
  //   github: 'https://github.com/MichaelOlatunji/banking-app',
  //   github2: 'https://github.com/MichaelOlatunji/banking-app-db',
  //   live: '',
  //   stack: 'Angular + PHP',
  //   isPrivate: false,
  //   isLive: false,
  // },
  {
    id: uuid(),
    title: 'Promotion Tracker',
    description: 'A demo software that is used to track staffs promotions in a college',
    github: 'https://github.com/MichaelOlatunji/promotion-app',
    github2: 'https://github.com/MichaelOlatunji/promotion-app-db',
    live: '',
    stack: 'Angular + Nodejs',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Vertical Full Page Slider',
    description: 'A responsive fullpage slider similar to fullpage.js',
    github: 'https://github.com/MichaelOlatunji/vertical-slider',
    live: 'https://vertical-slider.netlify.app/',
    stack: 'Vanilla JS + HTML + CSS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Car Racing Game',
    description: 'Opensourse responsive navbar component',
    github: 'https://github.com/MichaelOlatunji/kadnavbar',
    live: '',
    stack: 'Vanilla JS + HTML5 Canvas',
    isPrivate: false,
    isLive: true,
  },
];

export default function Projects(props: IProp) {
  useEffect(() => {
    props.activeMenu(0);
  }, []);

  return (
    <div className="project">
      <Helmet title="My Projects" name="Selected Projects" content="Selected Michael Olatunji's Projects" />
      <div className="group portfolio_showcase">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/resume">
          <button>Résumé ➜ </button>
        </Link>
      </div>
    </div>
  );
}
