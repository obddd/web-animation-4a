import React from 'react';
import './Neptune.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Neptune = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(59802), //Neptune : ~59802 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="neptune" ref={ref}></div>;
};

export default Neptune;
