import React, { FC, useState } from 'react';
import {
  intro,
  intro__light_bulbs,
  intro__main,
} from '../scss/introduction.mod.scss';
import MoonIcon from '../svg/MoonIcon';
import SunIcon from '../svg/SunIcon';
import { getMode, switchToDarkMode } from '../util';
import { LightBulb } from './LightBulb';

export type Mode = 'dark' | 'light';
export const Introduction: FC = () => {
  const [mode, setMode] = useState<Mode>(getMode());
  return (
    <div className={intro}>
      <div className={intro__light_bulbs}>
        <LightBulb />
        <LightBulb height="medium" />
        <LightBulb height="large" />
      </div>
      <div>
        {mode === 'dark' ? (
          <MoonIcon
            onClick={() => {
              setMode('light');
              switchToDarkMode('light');
            }}
          />
        ) : (
          <SunIcon
            onClick={() => {
              setMode('dark');
              switchToDarkMode('dark');
            }}
          />
        )}
      </div>
      <div className={intro__main}>
        <div></div>
        <div></div>
        <div>
          <h3>Hi There</h3>
          <h1>I’m Kyaw Myo Tun</h1>
          <h2>I’m now on my 21.Chasing my dream of to be a programmer.</h2>
        </div>
      </div>
    </div>
  );
};
