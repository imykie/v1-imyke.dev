import React from 'react';
import './project.scss';

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

export default function Project(props: IProject) {
  const { title, description, github, live, stack, isPrivate, isLive, github2 } = props;

  return (
    <div className="box_container md:hover:shadow-xs md:hover:z-50">
      <div className="box">
        <div className="project_details">
          <h3> {title} </h3>
          <p> {description} </p>
          <small className="py-3"> {stack} </small>
        </div>

        <div className="project_links">
          {isLive ? (
            <small>
              <a href={live} target="_blank" rel="noopener noreferrer">
                <i className="far fa-eye"></i> Live
              </a>
            </small>
          ) : (
            ''
          )}

          {isPrivate ? (
            ''
          ) : (
            <span>
              <small>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code-branch"></i> {github2 ? 'FE Code' : 'Code'}
                </a>
              </small>
              {github2 ? (
                <small>
                  <a href={github2} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-code-branch"></i> BE Code
                  </a>
                </small>
              ) : (
                ''
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
