import React, { FC, useState } from 'react';
import { Mode } from '.';
import MoonIcon from '../../svg/MoonIcon';
import SunIcon from '../../svg/SunIcon';
import { getMode, switchToDarkMode } from '../../util';

export const DarkLight: FC = () => {
  const [mode, setMode] = useState<Mode>(getMode());
  function darkToLight() {
    setMode('light');
    switchToDarkMode('light');
  }
  function lightToDark() {
    setMode('dark');
    switchToDarkMode('dark');
  }
  return (
    <>
      <div>
        {mode === 'dark' ? (
          <MoonIcon
            onClick={() => {
              darkToLight();
            }}
          />
        ) : (
          <SunIcon
            onClick={() => {
              lightToDark();
            }}
          />
        )}
      </div>
    </>
  );
};
