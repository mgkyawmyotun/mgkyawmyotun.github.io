import type { FC } from 'react';
import React from 'react';
import { project, project__card } from '../scss/project.mod.scss';
type ProjectCardType = {};
export const ProjectCard: FC = () => {
  return (
    <div className={project__card}>
      <img src="" alt="" />
      <h1></h1>
      <h2></h2>
      <div></div>
    </div>
  );
};
export const MyProject: FC = () => {
  return (
    <div className={project}>
      <h1>Here some of my projects</h1>
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
