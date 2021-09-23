import type { FC } from 'react';
import React from 'react';
import { location } from '../scss/loc.mod.scss';
import MapIcon from '../svg/MapIcon';
export const Location: FC = () => {
  return (
    <div className={location}>
      <div>
        <h1>I’m currently living in Mandalay</h1>
        <h2>Not a big city but a nice city to live and code .....</h2>
      </div>
      <div>
        <MapIcon />
      </div>
    </div>
  );
};
