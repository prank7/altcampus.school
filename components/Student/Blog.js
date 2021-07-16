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
        <p className="mb-2 text-lg font-source font-medium text-dark-blue-400">
          {props.blog.description}
        </p>
      </a>
      <a href={props.blog.liveURL} target="_blank">
        <span className="text-royal-blue-500 font-mukta">Read More</span>
      </a>
    </div>
  );
}

export default Blog;
