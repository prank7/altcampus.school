import React from 'react';

function Project(props) {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <h3 className="text-gray-900 text-2xl font-bold mb-2">Tunes</h3>
      <p className="font-medium mb-2 text-gray-800 text-lg">
        I'm the Front-End Developer from Udaipur, Raj. currently learning
        javaScript in Dharamshala. Have a serious passion for UI effects,
        animations and creating intuitive, dynamic user experiences. Let's make
        something special.
      </p>
      <footer>
        <a href="#" className="fot-bold text-xl mr-4 text-green-500">
          Demo
        </a>
        <a href="#" className="fot-bold text-xl mr-4 text-green-500">
          Code
        </a>
      </footer>
    </div>
  );
}

export default Project;
