import React from 'react';

function Project(props) {
  // console.log(props.project)
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <h3 className="text-gray-800 font-mukta text-2xl font-bold mb-1">
        {props.project.title}
      </h3>
      <p className="text-lg font-source font-medium text-dark-blue-400">
        {props.project.description}
      </p>
      <footer className="mt-3">
        <a
          href={props.project.liveURL}
          target="_blank"
          className="fot-semibold font-mukta text-lg text-green-500 mr-4"
        >
          Live Preview
        </a>
        <a
          href={props.project.code}
          target="_blank"
          className="fot-semibold font-mukta text-lg text-green-500"
        >
          Code
        </a>
      </footer>
    </div>
  );
}

export default Project;
