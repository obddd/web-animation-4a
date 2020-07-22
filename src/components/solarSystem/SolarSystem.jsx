import React from 'react';
import './SolarSystem.css';
import Sun from '../sun/Sun';
import Mercury from '../mercury/Mercury';
import Venus from '../venus/Venus';
import Earth from '../earth/Earth';
import Mars from '../mars/Mars';
import AsteroidBelt from '../asteroidBelt/AsteroidBelt';
import Jupiter from '../jupiter/Jupiter';
import Saturn from '../saturn/Saturn';
import Uranus from '../uranus/Uranus';
import Neptune from '../neptune/Neptune';
import Pluto from '../pluto/Pluto';

const SolarSystem = () => {
  return (
    <div className="solar-syst">
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <AsteroidBelt />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <Pluto />
    </div>
  );
};

export default SolarSystem;
