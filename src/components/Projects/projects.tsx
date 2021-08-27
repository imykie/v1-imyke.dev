import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

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
    title: 'Site Map Builder',
    description: 'A sitemap builder',
    github: 'https://github.com/imykie/sitemap-builder',
    live: '',
    stack: 'Go',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Task',
    description: 'A CLI task manager',
    github: 'https://github.com/imykie/task',
    live: '',
    stack: 'Go',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Tic Tac Toe',
    description: 'Tic Tac Toe game',
    github: 'https://github.com/imykie/tic-tac-toe-go',
    live: '',
    stack: 'Go',
    isPrivate: false,
    isLive: false,
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
