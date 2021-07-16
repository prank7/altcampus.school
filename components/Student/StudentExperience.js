import React from 'react';

function StudentExperience(props) {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <p className="mb-2 text-lg font-source font-medium text-dark-blue-400 break-words">
        {props.experineceAtAltCampus}
      </p>
    </div>
  );
}

export default StudentExperience;
