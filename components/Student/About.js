import React from 'react';
import Banner from './Banner';

function About(props) {
  return (
    <article className="p-4 bg-white shadow rounded-md mb-8">
      <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">About</h2>
      <p className="mb-2 text-lg font-source font-medium text-dark-blue-400">
        {props.about}
      </p>
    </article>
  );
}

export default About;
