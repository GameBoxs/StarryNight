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

function Taurus() {
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
            d="m265.38 193.2 4.7031 9.4648h0.003906c6.0352 12.09 14.727 22.656 25.422 30.91-26.891 16-45.375 43.023-50.535 73.883-5.1641 30.859 3.5156 62.426 23.73 86.309 20.219 23.879 49.922 37.648 81.207 37.648 31.289 0 60.992-13.77 81.211-37.648 20.215-23.883 28.895-55.449 23.73-86.309-5.1602-30.859-23.645-57.883-50.535-73.883 10.695-8.2539 19.387-18.82 25.422-30.91l4.7031-9.4648h0.003907c4.6055-9.2969 11.727-17.113 20.559-22.559 8.832-5.4453 19.016-8.3008 29.391-8.2422h22.398l0.003906-33.598h-22.402c-16.59-0.054687-32.863 4.5352-46.977 13.254-14.113 8.7227-25.504 21.219-32.879 36.082l-4.7031 9.4648c-6.207 12.383-16.809 22.012-29.73 27.004-12.922 4.9922-27.242 4.9922-40.164 0-12.922-4.9922-23.52-14.621-29.73-27.004l-4.7031-9.4648c-7.3789-14.871-18.777-27.375-32.902-36.094-14.125-8.7227-30.41-13.309-47.008-13.242h-22.402v33.602h22.398l0.003906-0.003906c10.344-0.027344 20.492 2.8438 29.293 8.2852 8.7969 5.4453 15.898 13.246 20.488 22.516zm157.42 131.6c0 19.309-7.6719 37.824-21.324 51.477-13.652 13.652-32.168 21.324-51.477 21.324s-37.824-7.6719-51.477-21.324c-13.652-13.652-21.324-32.168-21.324-51.477 0-19.309 7.6719-37.824 21.324-51.477 13.652-13.652 32.168-21.324 51.477-21.324s37.824 7.6719 51.477 21.324c13.652 13.652 21.324 32.168 21.324 51.477z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Taurus;
