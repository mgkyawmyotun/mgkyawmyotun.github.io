import type { FC } from 'react';
import React from 'react';
import {
  intro,
  intro__light_bulbs,
  intro__main,
} from '../scss/introduction.mod.scss';
import MoonIcon from '../svg/MoonIcon';
import { LightBulb } from './LightBulb';

export const Introduction: FC = () => {
  return (
    <div className={intro}>
      <div className={intro__light_bulbs}>
        <LightBulb />
        <LightBulb height="medium" />
        <LightBulb height="large" />
      </div>
      <div>
        <MoonIcon />
      </div>
      <div className={intro__main}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
