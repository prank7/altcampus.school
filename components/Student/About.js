import React from 'react';
import Banner from './Banner';

function About(props) {
  return (
    <article className="p-4 bg-white shadow rounded-md mb-8">
      <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">About</h2>
      <p className="font-medium mb-2 text-gray-800 text-lg">
       {props.about}
      </p>

    </article>
  );
}

export default About;
