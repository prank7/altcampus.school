import React from 'react';
import Link from 'next/link';

function CourseModelContent(props) {
  return (
    <div className="md:max-w-lg">
      <p className="text-gray-500 text-xl leading-normal font-Karla mt-8">
        {props.intro}
      </p>
      <p className="text-gray-500 text-xl leading-normal font-Karla mt-8">
        {props.subIntro}
      </p>
      <Link
        className="text-green-theme-900 text-xl font-semibold flex items-center mt-6 animate-arrow"
        href={props.cta || '/'}
      >
        <strong>{props.action}</strong>
        <img
          className="ml-12 arrow-slide"
          src="/images/icons/arrow-right-green.svg"
          alt="Arrow Right Icon"
        />
      </Link>
    </div>
  );
}

export default CourseModelContent;
