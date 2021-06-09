import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Utils/SEO/helmet';
import './resume.scss';

interface IProp {
  menu?: string[];
  activeMenu: (arg: number) => void;
}

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
              href="https://drive.google.com/file/d/1nmfoUiP1vzXIuBk8h84ylz8DO9GxhEvH/view?usp=sharing"
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
            <span className="pr-2 font-bold text-white">Languages: </span> JavaScript, TypeScript, Java, Python
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Framework/Libraries: </span> React, Vue, Nodejs, Nestjs,
            Firebase, GraphQL, Angular
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
            <span className="pr-2 font-bold text-white">Automation Tools: </span> Jenkins, Circleci, Travis-ci, GitLab
            ci
          </p>
          <p className="">
            <span className="pr-2 font-bold text-white">Monitoring and testing tools: </span> Cloudwatch, Stackdriver,
            Prometheus, Graphana, ELK Stack, Locust
          </p>
        </div>

        <div className="divider">
          <p>Experience</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <p className="title">
              Block Knowledge - Software and DevOps Engineer
              <span>
                <br /> DEC 2020 - CURRENT
              </span>
            </p>
            <article className="description">
              <p>
                <span>&#x2756;</span> Working on a financial social platform that allows group of individuals to donate
                to NGOs or as a tribe.
              </p>
              <p>
                <span>&#x2756;</span> Worked on pipeline using Gitlab-ci to run tests, build container image, push and
                deploy container image to AWS container service and to automate mobile app deployment to PlayStore and
                AppStore using fastlane.
              </p>
              <p>
                <span>&#x2756;</span> Integrated plaid and stripe for the backend solution.
              </p>
              <p>
                <span>&#x2756;</span> Set up development, production and failover server on AWS for the web application.
              </p>
            </article>
          </section>

          <section className="experience">
            <p className="title">
              Powerjamb - Software and DevOps Engineer
              <span>
                <br /> JUNE 2019 - SEPT 2020
              </span>
            </p>
            <article className="description">
              <p>
                <span>&#x2756;</span> Designed user friendly websites with tools and integration to meet multiple
                browser, and different screens user needs.
              </p>
              <p>
                <span>&#x2756;</span> Monitored automated build and continuous software integration process to
                build/release failure resolution.
              </p>
              <p>
                <span>&#x2756;</span> Used Jenkins, Docker, Kubernetes to deploy and manage microservices on AWS EKS.
              </p>
              <p>
                <span>&#x2756;</span> Monitored and tested deployments.
              </p>
            </article>
          </section>

          <section className="experience">
            <p className="title">
              Kovatek - Frontend Developer
              <span>
                <br /> SEPT 2019 - JUNE 2020
              </span>
            </p>
            <article className="description">
              <p>I contributed in developing user interfaces for quite a number of products within three months. </p>
              <p>
                <span>&#x2756;</span> Developed websites compatible with multiple browsers.
              </p>
              <p>
                <span>&#x2756;</span> Developed designs to meet specific requirements such as quick-loading sites with
                particular layouts.
              </p>
              <p>
                <span>&#x2756;</span> Designed and updated layouts to meet usability and performance requirements.
              </p>
              <p>
                <span>&#x2756;</span> Worked with Project Manager, Developers, UI designers to resolve technical issues.
              </p>
            </article>
          </section>

          <section className="experience">
            <p className="title">
              SQI - Web Developer (Student/Intern)
              <span>
                <br /> SEPT 2018 - MAR 2019
              </span>
            </p>
            <article className="description">
              <p>
                I started my journey in tech as a student/intern at Soft Quest Incorporated. Worked on various assigned
                projects
              </p>
              <p>
                <span>&#x2756;</span>Produced clean, validation-ready code for given project needs.
              </p>
              <p>
                <span>&#x2756;</span> Built a basic Banking Web Application with Angular and PHP.
              </p>
              <p>
                <span>&#x2756;</span> Built Car Racing game using JavaScript and HTML5 canvas.
              </p>
              <p>
                <span>&#x2756;</span> Built Scientific Calculator, Timer, Countdown on the Web in my early days and many
                other self development Projects.
              </p>
            </article>
          </section>
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
