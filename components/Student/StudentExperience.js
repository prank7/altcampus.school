import React from 'react';

function StudentExperience(props) {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <blockquote className="experience-quote mb-2 text-lg font-source font-medium text-dark-blue-400 break-words">
        {props.experineceAtAltCampus}
      </blockquote>
    </div>
  );
}

export default StudentExperience;
