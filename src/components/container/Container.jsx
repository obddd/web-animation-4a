import React from 'react';
import './Container.css';
import Description from '../description/Description';
import SolarSystem from '../solarSystem/SolarSystem';

const Container = () => {
  return (
    <div>
      <Description/>
      <SolarSystem/>
    </div>
  );
};

export default Container;
