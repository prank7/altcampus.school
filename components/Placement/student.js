import React from 'react';

function Student(props) {
  console.log(props);
  return (
    <a
      href={`/placements/students/${props.username}`}
      className="border rounded-lg shadow-sm"
    >
      <article>
        <figure className="h-56 overflow-hidden">
          <img
            className="rounded-lg rounded-b-none h-full w-full object-cover"
            src={props.image[0].url}
            alt={props.name}
          />
        </figure>
        <div className="px-4 py-2">
          <h2 className="text-xl text-dark-blue-700 font-bold font-mukta">
            {props.name}
          </h2>
          <h4 className="text-gray-800 mt-1">
            {props.role}, {props.company}
          </h4>
          <h4 className="text-right text-lg text-gray-500 font-semibold mt-3 font-sans">
            CTC: {props.ctc}
          </h4>
        </div>
      </article>
    </a>
  );
}

export default Student;
