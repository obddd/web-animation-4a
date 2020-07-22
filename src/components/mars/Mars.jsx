import React from 'react';
import './Mars.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Mars = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(687), //Mars : ~687 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="mars" ref={ref}></div>;
};

export default Mars;
