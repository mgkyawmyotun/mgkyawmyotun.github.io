import type { FC } from 'react';
import React from 'react';
import { journey__card } from '../scss/journey.mod.scss';

export const Card: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={journey__card}>
      <div></div>
      <div>{text}</div>
    </div>
  );
};
