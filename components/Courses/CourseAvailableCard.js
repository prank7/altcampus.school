import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function CoursesAvailableCard({ track }) {
  return (
    <Link href={`/courses/${track.slug}`}>
      <article className="py-6 px-7 border border-gray-300 max-w-5xl mx-auto rounded-md m-4">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl text-royal-blue-800 font-semibold">
            {track.name}
          </h2>
          <img
            src="/images/icons/chevron-right-green.svg"
            alt="Arrow Right Icon"
          />
        </header>
        <div className="flex items-center justify-between mt-6 flex-wrap">
          <p className="max-w-xl text-base text-gray-500">
            {track.description}
          </p>
          <figure className="flex gap-3 mt-8 md:mt-0">
            <img src="/images/icons/html.svg" alt="HTML" />
            <img src="/images/icons/css.svg" alt="CSS" />
            <img src="/images/icons/js-rounded.svg" alt="JavaScript" />
            <img src="/images/icons/react-rounded.svg" alt="React" />
            <img src="/images/icons/node.svg" alt="React" />
          </figure>
        </div>
      </article>
    </Link>
  );
}

export default CoursesAvailableCard;
