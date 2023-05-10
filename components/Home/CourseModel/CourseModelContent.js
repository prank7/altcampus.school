import React from 'react';
import Link from 'next/link';

function CourseModelContent(props) {
  return (
    <div className="">
      <p className="text-gray-500 text-xl leading-normal font-Karla mt-8">
        {props.intro}
      </p>
      <p className="text-gray-500 text-xl leading-normal font-Karla mt-8">
        {props.subIntro}
      </p>
      <footer>
        <Link
          className="text-green-theme-900 text-xl font-semibold flex items-center mt-6 animate-arrow"
          href={props.cta || '/'}
        >
          <>
            <strong>{props.action}</strong>
            <img
              className="ml-12 arrow-slide"
              src="/images/icons/arrow-right-green.svg"
              alt="Arrow Right Icon"
              width="30"
              height="18"
            />
          </>
        </Link>
      </footer>
    </div>
  );
}

export default CourseModelContent;
