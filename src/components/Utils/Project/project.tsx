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
  const { title, description, github, live, stack, isPrivate, isLive } = props;

  return (
    <div className="box_container md:hover:shadow-xs md:hover:z-50 md:group-hover:opacity-50 md:hover:opacity-important">
      <div className="box">
        <div className="project_details">
          <h3> {title} </h3>
          <small> {stack} </small>
          <p> {description} </p>
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
            <small>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i> Code
              </a>
            </small>
          )}
        </div>
      </div>
    </div>
  );
}
