import React from 'react';
import './Animation.css';

const Animation = () => {
  return (
    <div>
      <div className="description">
        <h1>Solar System</h1>
        <hr />
        <p>
          I know this is not the first one on CodePen, but I'm a space and
          physics lover, and I wanted to create mine :)
        </p>
        <p>
          Here is a true time scaled solar-system, which means that every
          objects have a time relative to an Earth year. You can change the
          number in second of the
          <br />
          <code>$year-in-second</code>
          variable to increase the speed of revolutions. Here 1 year = 30
          seconds.
        </p>
        <p className="hide">
          Note the css tricks for the Saturn rings (box-shadow) and reverse
          animation to compensate the orbit.
        </p>
        <hr />
      </div>
      <div className="solar-syst">
        <div className="sun"></div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth"></div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
        <div className="asteroids-belt"></div>
      </div>
    </div>
  );
};

export default Animation;
