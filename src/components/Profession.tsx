import type { FC } from 'react';
import React from 'react';
import { profession, profession__card } from '../scss/profession.mod.scss';
import BackEndIcon from '../svg/BackEndIcon';
import CloudIcon from '../svg/CloudIcon';
import FrontEndIcon from '../svg/FrontEndIcon';
type ProfessionCardType = {
  header_text: string;
  secondary_text: string;
  icon: JSX.Element;
};
const ProfessionCard: FC<ProfessionCardType> = ({
  header_text,
  secondary_text,
  icon,
}) => {
  return (
    <div className={profession__card}>
      {icon}
      <h1>{header_text}</h1>
      <h2>{secondary_text}</h2>
    </div>
  );
};
export const Profession: FC = () => {
  return (
    <div className={profession}>
      <h1>I DO</h1>
      <div>
        <ProfessionCard
          header_text={'Frontend Development'}
          secondary_text={'HTML/CSS/SCSS/JavaScript/TypeScript/React/NextJS'}
          icon={<FrontEndIcon />}
        />
        <ProfessionCard
          header_text={'Backend Development'}
          secondary_text={
            'NodeJs/NestJs/JavaScript/TypeScript/WebSocket/GraphQL'
          }
          icon={<BackEndIcon />}
        />
        <ProfessionCard
          header_text={'Cloud Development'}
          secondary_text={'Docker/Heroku/DigitalOcean/Github Action/CI/CD'}
          icon={<CloudIcon />}
        />
      </div>
    </div>
  );
};
