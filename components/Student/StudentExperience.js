import React from 'react';

function StudentExperience(props) {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
          <p className=' font-medium'>
             {props.experineceAtAltCampus}
        </p>
    </div>
  );
}

export default StudentExperience;
