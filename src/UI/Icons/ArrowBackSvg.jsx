import React from 'react';

const ArrowBackSvg = ({ width = 35, height = 35, fill = 'none', stroke = '#000', classNames }) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      viewBox="0 0 35 35"
    >
      <path
        d="M6.198 14.9479L24.6431 14.9479C26.9401 14.9479 28.8022 16.81 28.8022 19.1069L28.8022 20.6326C28.8022 22.9296 26.9401 24.7916 24.6431 24.7916L10.2084 24.7916"
        stroke={stroke}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
      <path
        d="M9.84375 10.5729C8.13521 12.2814 7.17729 13.2393 5.46875 14.9479L9.84375 19.3229"
        stroke={stroke}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowBackSvg;
