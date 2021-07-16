import React from 'react';
import Image from 'next/image';

function Student(props) {
  const imageLoader = ({ src, width, quality }) => {
    return src;
  };
  return (
    <a
      href={`/placements/students/${props.username}`}
      className="border rounded-lg shadow-sm"
    >
      <article>
        <figure className="h-56 overflow-hidden">
          <Image
            loader={imageLoader}
            className="rounded-lg rounded-b-none h-full w-full object-cover"
            src={props.image[0].url}
            alt={props.name}
            width={300}
            height={300}
          />
        </figure>
        <div className="px-4 py-2">
          <h2 className="text-xl text-royal-blue-600 font-bold font-mukta">
            {props.name}
          </h2>
          <h4 className="text-gray-500 font-semibold font-mukta">
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
