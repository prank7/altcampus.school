import React from 'react';

function CourseModelGraphics(props) {
  return (
    <figure className="sm:text-right mt-8 sm:mt-0 sm:ml-12 md:ml-40">
      <img src={props.image} className="inline-block" alt={props.alt} />
    </figure>
  );
}

export default CourseModelGraphics;
