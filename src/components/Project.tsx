import type { FC } from 'react';
import React from 'react';
import covid19gif from '../images/covid19.gif';
import { project, project__card } from '../scss/project.mod.scss';
type ProjectCardType = {
  img: JSX.Element;
  header_text: string;
  footer_text: string;
  tags: string[];
};
export const ProjectCard: FC<ProjectCardType> = ({
  img,
  header_text,
  footer_text,
  tags,
}) => {
  return (
    <div className={project__card}>
      {img}
      <h1>{header_text}</h1>
      <h2>{footer_text}</h2>
      <div>
        {tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
    </div>
  );
};
export const MyProject: FC = () => {
  return (
    <div className={project}>
      <h1>Here some of my projects</h1>
      <div>
        <ProjectCard
          img={<img src={covid19gif} alt="Covid19Project" />}
          header_text="Covid19 Tracker App"
          footer_text="The purspose of app is to get the real time update of covid-19 data across the world.
Visaulize data on Map / Graph/ Diagram and more.. "
          tags={['JAVASCRIPT', 'NodeJs', 'JAVA', 'GOogle', 'DataScience']}
        />
        <ProjectCard
          img={<img src={covid19gif} alt="Covid19Project" />}
          header_text="Covid19 Tracker App"
          footer_text="The purspose of app is to get the real time update of covid-19 data across the world.
Visaulize data on Map / Graph/ Diagram and more.. "
          tags={['JAVASCRIPT', 'NodeJs', 'JAVA', 'GOogle', 'DataScience']}
        />
        <ProjectCard
          img={<img src={covid19gif} alt="Covid19Project" />}
          header_text="Covid19 Tracker App"
          footer_text="The purspose of app is to get the real time update of covid-19 data across the world.
Visaulize data on Map / Graph/ Diagram and more.. "
          tags={['JAVASCRIPT', 'NodeJs', 'JAVA', 'GOogle', 'DataScience']}
        />
      </div>
    </div>
  );
};
