import React from 'react';
import './Pluto.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Pluto = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(90580), //Pluto : ~90580 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="pluto" ref={ref}></div>;
};

export default Pluto;
