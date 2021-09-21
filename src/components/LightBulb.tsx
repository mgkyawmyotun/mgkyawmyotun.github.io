import type { FC } from 'react';
import React from 'react';
import { large, light_bulb, medium, small } from '../scss/light_bulb.mod.scss';
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
  return <div className={`${light_bulb} ${transformToClass(height)}`}></div>;
};
