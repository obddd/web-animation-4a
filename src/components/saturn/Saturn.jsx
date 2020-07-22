import React from 'react';
import './Saturn.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const Saturn = ({rev}) => {
  const { ref } = useWebAnimations({
    keyframes: { transform: ['rotate(0deg)', 'rotate(-360deg)'] },
    timing: {
      duration: rev(10747), //Saturn : ~10747 days in year
      iterations: Infinity,
      easing: "linear"
    }
  });
  return <div className="saturn" ref={ref}></div>;
};

export default Saturn;
