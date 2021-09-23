import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { intro, intro__main } from '../../scss/introduction.mod.scss';
import { DarkLight } from './DarkLight';
import { LightBulbs } from './LightBulbs';

export type Mode = 'dark' | 'light';
export const Introduction: FC = () => {
  return (
    <div className={intro}>
      <LightBulbs />
      <DarkLight />
      <div className={intro__main}>
        <motion.div whileTap={{ scale: 0.9 }}></motion.div>
        <div></div>
        <motion.div
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          initial={{ scale: 0 }}
        >
          <h3>Hi There</h3>
          <h1>I’m Kyaw Myo Tun</h1>
          <h2>I’m now on my 21.Chasing my dream of to be a programmer.</h2>
        </motion.div>
      </div>
    </div>
  );
};
