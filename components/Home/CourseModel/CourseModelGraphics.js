import React from 'react';

function CourseModelGraphics(props) {
  return (
    <figure className="text-right ml-40">
      <img src={props.image} className="inline-block" alt={props.alt} />
    </figure>
  );
}

export default CourseModelGraphics;
