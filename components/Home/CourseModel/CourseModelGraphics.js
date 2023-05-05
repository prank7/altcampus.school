import React from 'react';

function CourseModelGraphics(props) {
  return (
    <figure className="text-center">
      <img
        src={props.image}
        className="inline-block w-full"
        width="430"
        height="430"
        alt={props.alt}
      />
    </figure>
  );
}

export default CourseModelGraphics;
