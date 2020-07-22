import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className="description">
      <h1>Solar System</h1>
      <hr />
      <p>
        Here is a true time scaled solar-system, which means that every objects
        have a time relative to an Earth year. You can change the number in
        second of the
        <br />
        <code>$year-in-second</code> {' '}
        variable to increase the speed of revolutions. Here 1 year = 30 seconds.
      </p>
      <p className="hide">
        Note the css tricks for the Saturn rings (box-shadow) and reverse
        animation to compensate the orbit.
      </p>
      <hr />
    </div>
  );
};

export default Description;
