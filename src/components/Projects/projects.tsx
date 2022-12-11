import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
};

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

const projects: Project[] = [
  {
    id: uuid(),
    title: 'imyke.dev',
    description: 'My Portfolio Website',
    github: 'https://github.com/imykie/imyke.dev',
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
    github: 'https://github.com/imykie/Cloud_DevOps_Nanodegree_Capstone',
    live: '',
    stack: 'AWS + Jenkins + Docker + Kubernetes + Python',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Operationalized ML API',
    description: 'Automated CI-CD pipeline for ML API that predicts housing price in Boston',
    github: 'https://github.com/imykie/operationalize-ML-api',
    live: '',
    stack: 'Flask + AWS + Jenkins + Docker + Kubernetes + Circle CI',
    isPrivate: false,
    isLive: false,
  },
];

export default function Projects(props: Prop) {
  useEffect(() => {
    props.activeMenu(1);
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
