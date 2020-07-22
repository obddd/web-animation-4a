import React from 'react';
import './AsteroidBelt.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const AsteroidBelt = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(2191), //AsteroidBelt : ~2191 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="asteroids-belt" ref={ref}></div>;
};

export default AsteroidBelt;
