import React from 'react';
import './Mercury.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Mercury = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(87.5), //Mercury : ~87,5 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="mercury" ref={ref}></div>;
};

export default Mercury;
