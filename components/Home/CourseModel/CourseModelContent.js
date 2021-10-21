import React from 'react';

function CourseModelContent(props) {
  return (
    <div className="md:max-w-lg">
      <p className="text-gray-500 text-xl leading-normal font-Karla mt-8">
        {props.intro}
      </p>
      <a
        className="text-green-theme-900 text-xl font-semibold flex items-center mt-6"
        href="#"
      >
        <strong>{props.action}</strong>
        <img
          className="ml-12"
          src="/images/icons/arrow-right-green.svg"
          alt="Arrow Right Icon"
        />
      </a>
    </div>
  );
}

export default CourseModelContent;
