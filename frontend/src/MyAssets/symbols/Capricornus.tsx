import * as React from 'react';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 0)',
  },
};

function Capricornus() {
  return (
    <div className="container">
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 700 700">
        <defs>
          <clipPath id="z">
            <path d="M70 0h559.99v559.99H70z" />
          </clipPath>
        </defs>
        <g fill="none" stroke="#7BD6CD" strokeMiterlimit="10" strokeWidth="41.791" clipPath="url(#z)">
          <motion.path
            fill="currentColor"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="m243.6 201.6v117.6h33.602l-0.003906-117.6c0-14.008 7.4727-26.949 19.602-33.949 12.129-7.0039 27.07-7.0039 39.199 0 12.129 7 19.602 19.941 19.602 33.949v63.672c-0.14453 20.523 5.6953 40.641 16.797 57.902l-47.656 47.656c-17.031 17.129-40.188 26.762-64.344 26.77h-16.797v33.602h16.801l-0.003906-0.003906c33.168 0.09375 64.992-13.098 88.371-36.625l46.031-46.031 20.16 20.16c11.32 11.312 26.672 17.668 42.676 17.668 16.004 0 31.355-6.3594 42.672-17.672 11.32-11.316 17.684-26.664 17.691-42.668v-2.4648c-0.007812-16.004-6.3711-31.352-17.691-42.664-11.316-11.316-26.668-17.672-42.672-17.672-16.004-0.003907-31.355 6.3516-42.676 17.664l-17.754 17.754c-5.3359-10.391-8.0859-21.918-8.0078-33.602v-63.445c-0.023438-20.074-8.3398-39.246-22.973-52.988-14.637-13.738-34.297-20.824-54.332-19.582-20.035 1.2422-38.668 10.703-51.496 26.145-13.812-16.684-34.336-26.352-56-26.375h-22.398v33.602h22.398v-0.003906c10.398 0 20.367 4.1328 27.719 11.484 7.3516 7.3516 11.484 17.32 11.484 27.719zm195.1 103.04c5.0195-5.0195 11.828-7.8398 18.93-7.8398 7.0977 0 13.906 2.8203 18.926 7.8398 5.0195 5.0195 7.8398 11.828 7.8398 18.926v2.4648c0 7.1016-2.8203 13.91-7.8398 18.93-5.0195 5.0195-11.828 7.8398-18.926 7.8398-7.1016 0-13.91-2.8203-18.93-7.8398l-20.16-20.16z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Capricornus;
