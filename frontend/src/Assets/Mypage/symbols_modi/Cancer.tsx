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

function Cancer() {
  return (
    <div className="container">
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 700 700">
        <defs>
          <clipPath id="z">
            <path d="M70 0h559.99v559.99H70z" />
          </clipPath>
        </defs>
        <g fill="none" stroke="#0492b1" strokeMiterlimit="10" strokeWidth="41.791" clipPath="url(#z)">
          <motion.path
            fill="#0492b1"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="m506.8 280c0.011719-17.148-7.1211-33.523-19.688-45.191-12.566-11.668-29.426-17.57-46.523-16.285-17.102 1.2812-32.891 9.6367-43.574 23.047-10.684 13.414-15.293 30.676-12.719 47.629s12.102 32.062 26.285 41.703c14.184 9.6367 31.742 12.926 48.449 9.0742-17.184 34.547-48.383 60.047-85.664 70-37.281 9.957-77.039 3.4062-109.16-17.977l-24.078 24.078c33.602 24.387 75.043 35.465 116.33 31.102 41.285-4.3633 79.496-23.863 107.26-54.734 27.762-30.871 43.109-70.926 43.082-112.45zm-61.602 28c-7.4258 0-14.547-2.9492-19.797-8.1992-5.2539-5.2539-8.2031-12.375-8.2031-19.801s2.9492-14.547 8.2031-19.801c5.25-5.25 12.371-8.1992 19.797-8.1992s14.547 2.9492 19.801 8.1992c5.25 5.2539 8.1992 12.375 8.1992 19.801s-2.9492 14.547-8.1992 19.801c-5.2539 5.25-12.375 8.1992-19.801 8.1992z"
          />
          <motion.path
            fill="#0492b1"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="m361.2 145.6c26.539-0.10937 52.504 7.6914 74.594 22.398l24.078-24.078c-33.602-24.387-75.043-35.465-116.33-31.102-41.285 4.3633-79.496 23.863-107.26 54.734-27.762 30.871-43.109 70.926-43.082 112.45-0.011719 17.148 7.1211 33.523 19.688 45.191 12.566 11.668 29.426 17.57 46.523 16.285 17.102-1.2812 32.891-9.6367 43.574-23.047 10.684-13.414 15.293-30.676 12.719-47.629s-12.102-32.062-26.285-41.703c-14.184-9.6367-31.742-12.926-48.449-9.0742 11.145-22.352 28.301-41.156 49.535-54.301 21.238-13.148 45.719-20.113 70.695-20.121zm-106.4 106.4c7.4258 0 14.547 2.9492 19.797 8.1992 5.2539 5.2539 8.2031 12.375 8.2031 19.801s-2.9492 14.547-8.2031 19.801c-5.25 5.25-12.371 8.1992-19.797 8.1992s-14.547-2.9492-19.801-8.1992c-5.25-5.2539-8.1992-12.375-8.1992-19.801s2.9492-14.547 8.1992-19.801c5.2539-5.25 12.375-8.1992 19.801-8.1992z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Cancer;
