import type { FC } from 'react';
import React from 'react';
import {
  journey,
  journey__bar,
  journey__cards,
} from '../scss/journey.mod.scss';
export const Journey: FC = () => {
  return (
    <div className={journey}>
      <h1>My Journey</h1>
      <div>
        <div className={journey__bar}>
          <div>2019</div>
          <div>2020</div>
          <div>2021</div>
        </div>
        <div className={journey__cards}></div>
      </div>
    </div>
  );
};
