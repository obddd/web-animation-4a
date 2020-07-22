import React from 'react';
import './Uranus.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Uranus = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(30589), //Uranus : ~30589 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="uranus" ref={ref}></div>;
};

export default Uranus;
