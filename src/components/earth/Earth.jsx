import React from 'react';
import './Earth.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Earth = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(365.25), //Earth : ~365.25 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return (
    <div className="earth" ref={ref}>
    </div>
  );
};

export default Earth;
