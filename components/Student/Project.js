import React from 'react';

function Project(props) {
  // console.log(props.project)
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <h3 className="text-gray-800 font-mukta text-2xl font-bold mb-1">
        {props.project.title}
      </h3>
      <p className="mb-2 text-lg font-source font-medium text-dark-blue-400">
        {props.project.description}
      </p>
      <footer>
        <a
          href={props.project.liveURL}
          target="_blank"
          className="fot-bold text-xl mr-4 text-green-500"
        >
          Demo
        </a>
        <a
          href={props.project.code}
          target="_blank"
          className="fot-bold text-xl mr-4 text-green-500"
        >
          Code
        </a>
      </footer>
    </div>
  );
}

export default Project;
