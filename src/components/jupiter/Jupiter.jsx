import React from 'react';
import './Jupiter.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Jupiter = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(4331), //Jupiter : ~4331 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="jupiter" ref={ref}></div>;
};

export default Jupiter;
