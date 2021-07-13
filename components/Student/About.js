import React from 'react';
import Banner from './Banner';

function About(props) {
  return (
    <article className="p-4 bg-white shadow rounded-md mb-8">
      <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">About</h2>
      <p className="font-medium mb-2 text-gray-800 text-lg">
        I'm the Front-End Developer from Udaipur, Raj. currently learning
        javaScript in Dharamshala. Have a serious passion for UI effects,
        animations and creating intuitive, dynamic user experiences. Let's make
        something special.
      </p>
      <p className="font-medium mb-2 text-gray-800 text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
        dignissimos doloribus tempora modi distinctio voluptas repellendus
        impedit? Id iure fuga expedita culpa placeat, animi doloremque eius
        voluptate, sunt magni quae.
      </p>
    </article>
  );
}

export default About;
