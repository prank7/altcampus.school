import React from 'react';
import Banner from './Banner';

function About(props) {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <p className="mb-2 text-lg font-source font-medium text-dark-blue-400">
        {props.about}
      </p>
    </div>
  );
}

export default About;
