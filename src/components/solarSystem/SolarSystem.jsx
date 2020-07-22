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
  const yearInSec = 30000; // 1 Earth year = 30 sec
  const revolution = (planetDaysInYear) => {
    return (planetDaysInYear * yearInSec) / 365.2563; //Earth reference.
  };
  return (
    <div className="solar-syst">
      <Sun />
      <Mercury rev={revolution} />
      <Venus rev={revolution} />
      <Earth rev={revolution} />
      <Mars rev={revolution} />
      <AsteroidBelt rev={revolution} />
      <Jupiter rev={revolution} />
      <Saturn rev={revolution} />
      <Uranus rev={revolution}/>
      <Neptune rev={revolution} />
      <Pluto rev={revolution} />
    </div>
  );
};

export default SolarSystem;
