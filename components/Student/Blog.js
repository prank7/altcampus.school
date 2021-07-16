import React from 'react';

function Blog(props) {
  // console.log(props.blog)
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <a href={props.blog.liveURL} target="_blank">
        <h3 className="text-gray-800 font-mukta text-2xl font-bold mb-1">
          {props.blog.title}
        </h3>
      </a>
      <a href={props.blog.liveURL} target="_blank">
        <p className="text-lg font-source font-medium text-dark-blue-400">
          {props.blog.description}
        </p>
      </a>
      <a
        href={props.blog.liveURL}
        target="_blank"
        className="mt-3 inline-block"
      >
        <span className="fot-semibold font-mukta text-lg text-green-500">
          Read More
        </span>
      </a>
    </div>
  );
}

export default Blog;
