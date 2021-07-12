import React from 'react';

function Student(props) {
  return (
    <a href="/placements/student">
      <article className="border rounded-lg shadow-sm">
        <figure className="h-56 overflow-hidden">
          <img
            className="rounded-lg rounded-b-none h-full w-full object-cover"
            src="/images/students/harshaan-full.jpeg"
            alt="Harshaan Nihaal Khaan"
          />
        </figure>
        <div className="px-4 py-2">
          <h2 className="text-2xl text-dark-blue-700 font-bold">
            Harshaan Nihaal Khan
          </h2>
          <h4 className="text-md text-gray-800 font-semibold mt-1">
            Software Engineer, BigBinary
          </h4>
          <h4 className="text-right text-lg text-gray-500 font-semibold mt-3 font-sans">
            CTC: $2000
          </h4>
        </div>
      </article>
    </a>
  );
}

export default Student;
