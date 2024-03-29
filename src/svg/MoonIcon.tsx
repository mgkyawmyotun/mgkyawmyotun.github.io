import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import { moon } from '../scss/icon.mod.scss';

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  const variants: Variants = {
    hidden: { x: 100 },
    visible: {
      transition: { duration: 1, ease: 'easeInOut' },
      x: 0,
    },
  };

  return (
    <svg
      viewBox="0 0 89 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={moon}
      {...props}
    >
      <motion.path
        d="M3.384 55.338c7.925 10 21.774 16.634 37.54 16.662 24.425.043 44.48-15.94 44.776-35.699C85.978 17.71 68.904 2.298 46.758.004c-.474-.05-.782.389-.494.697 5.34 5.718 8.505 12.837 8.505 20.556 0 18.852-18.89 34.135-42.194 34.135-2.956 0-5.84-.245-8.624-.714-.467-.078-.824.335-.567.66z"
        fill="#EFDA45"
        initial="hidden"
        animate="visible"
        variants={variants}
      />
      <motion.path
        d="M3.95 54.678c-.466-.079-.824.333-.567.658C11.325 65.36 25.214 72 41.022 72c24.677 0 44.68-16.184 44.68-36.146 0-7.988-3.203-15.371-8.628-21.355a29.812 29.812 0 011.933 10.324c.15 20.114-19.819 36.371-44.682 36.37-9.01 0-17.396-2.157-24.412-5.87a51.288 51.288 0 01-5.963-.645z"
        fill="#EDC148"
        initial="hidden"
        animate="visible"
        variants={variants}
      />
    </svg>
  );
}

export default MoonIcon;
