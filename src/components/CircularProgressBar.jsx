import React from 'react';

const CircularProgressBar = ({ progress }) => {
  const radius = 90;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = isNaN(progress) ? circumference : circumference * (1 - progress / 100);
  const strokeColor = progress === 100 ? "#57CB4C" : "#FF5631";

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <circle
        stroke="#1E1E1E"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={strokeColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFF"
        fontSize="24px"
        fontFamily="Roboto, sans-serif"
        fontWeight="700"
      >
        {isNaN(progress) ? '0%' : Math.round(progress) + '%'}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
