import { motion } from 'framer-motion';
import type { FC } from 'react';
import React from 'react';
import {
  large,
  light_bulb,
  medium,
  small,
} from '../../scss/light_bulb.mod.scss';

type HeightType = 'small' | 'medium' | 'large';
interface LightBulbType {
  height?: HeightType;
}
const transformToClass = (height: HeightType) => {
  if (height == 'small') {
    return small;
  }
  if (height == 'medium') {
    return medium;
  }
  return large;
};
export const LightBulb: FC<LightBulbType> = ({ height = 'small' }) => {
  return (
    <motion.div
      drag="x"
      transition={{ type: 'spring', duration: 1 }}
      dragConstraints={{ left: 0, right: 0 }}
      whileDrag={{ rotate: '-50deg', height }}
      style={{ originX: 0, originY: -0.2 }}
      className={`${light_bulb} ${transformToClass(height)}`}
    ></motion.div>
  );
};
