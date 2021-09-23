import type { FC } from 'react';
import React from 'react';
import { intro__light_bulbs } from '../../scss/introduction.mod.scss';
import { LightBulb } from './LightBulb';
export const LightBulbs: FC = () => {
  return (
    <>
      <div className={intro__light_bulbs}>
        <LightBulb />
        <LightBulb height="medium" />
        <LightBulb height="large" />
      </div>
    </>
  );
};
