import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Utils/SEO/helmet';
import './resume.scss';

interface IProp {
  menu?: string[];
  activeMenu: (arg: number) => void;
}

interface IResume {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

const resume: IResume[] = [
  {
    company: 'Block Knowledge',
    role: 'Software and DevOps Engineer',
    startDate: 'DEC 2020',
    endDate: '',
    achievements: [
      'Designed the database and system architecture for Kadogo (turn everyday purchases into charitable donations)',
      'Leading the kadogo backend team.',
      'Optimized the backend to leverage on cloud services like serverless functions and messaging systems to increase performance and prevent downtime of critical part of the application.',
      'Developed APIs for the mobile application, merchant and NGO dashboard.',
      'Facilitated the use of continuous integration and continuous deployment tools to reduce code shipping time and increase collaboration and productivity among the developers.',
      'Implemented the spare change and cashback donation algorithms.',
      'Coached and mentored 2 interns.',
      'Set up Autoscaling, Load balancers and failover servers on AWS for development, staging, production environment.',
    ],
  },
  {
    company: 'FarmKonnect Agric Business Nig. Ltd',
    role: 'Software Engineer (Contract)',
    startDate: 'SEPT 2020',
    endDate: 'DEC 2020',
    achievements: [
      'Co-designed the database and system architecture for Afide. An inclusive financial platform for daily earners.',
      'Developed the web application that facilitate transactions and payment on the platform.',
      'Developed 4 dashboards for end to end activity of the platforms (Admin, User, Agent, Cooperative Admin Dashboards)',
    ],
  },
  {
    company: 'Powerjamb',
    role: 'Software and DevOps Engineer',
    startDate: 'JUNE 2019',
    endDate: 'SEPT 2020',
    achievements: [
      'Managed infrastructure as code using AWS CloudFormation.',
      'Redesigned the landing page.',
      'Developed a web mobile first examination application.',
      'Created Dockerfiles and built docker images for microservices to run on kubernetes cluster.',
      'Created and managed the deployment of microservices cluster to EKS using docker, kubernetes, helm and Jenkins.',
      'Experience with Amazon services such as AWS, VPC, S3, EC2 Relational Database (RDS), Document DB, Elastic Load Balancing, Autoscaling, ECR, ECS, Lambda, IAM, EKS, Beanstalk and CloudFormation.',
    ],
  },
  {
    company: 'Soft Quest Incorporated',
    role: 'Software Enginer Intern',
    startDate: 'SEPT 2018',
    endDate: 'MAR 2019',
    achievements: [
      'Produced clean, validation-ready code for given project needs.',
      'Developed a basic Banking Web Application with Angular and PHP.',
      'Developed a Car Racing game using JavaScript and HTML5 canvas.',
      'Built an advanced Scientific Calculator, Inventory System, Timer, Countdown on the Web and many other self development Projects.',
    ],
  },
];

export default function Resume(props: IProp) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  return (
    <div className="resume">
      <Helmet title="My Resume" name="Michael Olatunji Resume" content="Michael Olatunji - Software Engineer Resume" />
      <div className="resume_container">
        <div className="top_row">
          <h2>Michael Olatunji</h2>
          <div className="buttons">
            {/* <a href="https://www.linkedin.com/in/imykel" target="_blank" rel="noopener noreferrer">
              <small>
                <i className="fab fa-linkedin"></i> <span>Linked In</span>
              </small>
            </a> */}
            <a
              href="https://drive.google.com/file/d/1cXG3oS6vv4zkcRBs3aMensAMvf0hpyIr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>
                <i className="fas fa-download"></i> <span>Download </span>
              </small>
            </a>
          </div>
        </div>

        <p className="subheading">Software Engineer | DevOps Engineer</p>

        <div className="summary">
          <p>
            I'm a Problem Solving Software Engineer with background working effectively in dynamic environments. Proud
            team player focused on achieving project objectives with speed and accuracy. I design quality, great user
            experience and scalable products. Proficient with automating, configuring management and monitoring tools,
            and in developing CI/CD pipelines.
          </p>
        </div>

        <div className="divider">
          <p>Skills</p>
          <span></span>
        </div>

        <div className="skills">
          <p className="">
            <span className="pr-2 font-bold text-white">Languages: </span> JavaScript/TypeScript, Go, Python
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Framework/Libraries: </span> React, Vue, Nodejs, Nestjs,
            Firebase, GraphQL, Flask
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Storage/Database: </span> SQL, Postgres, MongoDB, Firestore, AWS
            S3, Cloud Storage
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Infrastructure: </span> AWS, GCP, CloudFormation, Terraform
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Tooling: </span> Linux, Git, Docker, Kubernetes
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Automation Tools: </span> Jenkins, Circle CI, GitLab CI, Github
            Workflows ci
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Monitoring and testing tools: </span> Cloudwatch, Prometheus,
            Graphana, Locust
          </p>
        </div>

        <div className="divider">
          <p>Experience</p>
          <span></span>
        </div>

        <div className="exp_container">
          {resume.map((data, idx) => {
            return (
              <section className="experience" key={idx}>
                <p className="title">
                  {data.company} - {data.role}
                  <span>
                    <br /> {data.startDate} - {data.endDate ? data.endDate : 'CURRENT'}
                  </span>
                </p>
                <article className="description">
                  {data.achievements.map((achievement) => {
                    return (
                      <p>
                        <span>&#x2756;</span>
                        {achievement}
                      </p>
                    );
                  })}
                </article>
              </section>
            );
          })}
        </div>

        <div className="divider">
          <p>Education</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <p className="title">
              B.Sc Computer Engineering at Obafemi Awolowo University, Ile-Ife <br />
              <span>MAR 2019 - CURRENT</span>
            </p>
          </section>
        </div>

        <div className="divider">
          <p>Certification</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <p className="title">
              Cloud DevOps Engineer Nanodegree, Udacity <br />
              <span>MAY 2020</span>
            </p>
            <p className="title">
              Microsoft Certified: Azure Fundamentals (AZ – 900) <br />
              <span>JULY 2020</span>
            </p>
          </section>
        </div>

        <div className="divider">
          <p>Languages</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <p className="title">
              English -<span>PROFICIENT</span>
            </p>
            <p className="title">
              Yoruba -<span>PROFICIENT</span>
            </p>
            <p className="title">
              Spanish -<span>BEGINNER</span>
            </p>
          </section>
        </div>

        <div className="divider">
          <p>Hobbies</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p>Learning, Music, Football</p>
            </article>
          </section>
        </div>

        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p>
                Some of my works can be found <span> </span>
                <span className="underline">
                  <Link to="/projects"> here</Link>
                </span>
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="go_button_container">
        <Link to="/projects">
          <button>
            <b>➜ </b> Projects
          </button>
        </Link>
        <Link to="/contact">
          <button>Contact ➜ </button>
        </Link>
      </div>
    </div>
  );
}
