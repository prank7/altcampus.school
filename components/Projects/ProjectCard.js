import React from 'react';
import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/solid';
const ROOT_IMAGE_URL = '/images/projects/';

const ProjectCard = ({
  projectName,
  projectImage,
  githubLink,
  liveLink,
  stackList
}) => {
  console.log({ projectImage });
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        className="rounded-lg mb-4 h-36 object-cover w-full"
        src={ROOT_IMAGE_URL + projectImage}
        alt={projectName}
        width="290"
        height="144"
      />
      <h3 className="text-xl font-semibold mb-4">{projectName}</h3>
      <ul className="flex flex-wrap mb-4">
        {stackList.map((stack, index) => (
          <li
            key={index}
            className="font-mukta text-royal-blue-800 bg-royal-blue-200 inline-flex items-center mb-1 mr-1 px-2 py-1 rounded-full text-xs"
          >
            {stack}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        {githubLink && (
          <a
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-800"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLinkIcon className="h-6 w-6" />
            <span>Github</span>
          </a>
        )}
        <a
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-800"
          href={liveLink}
          target="_blank"
          rel="noreferrer"
        >
          <CodeIcon className="h-6 w-6" />
          <span>Live</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
