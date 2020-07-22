import React from 'react';
import './Venus.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Venus = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(224.7), //Venus : ~224,7 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="venus" ref={ref}></div>;
};

export default Venus;
