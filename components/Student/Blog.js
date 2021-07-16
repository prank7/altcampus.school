import React from 'react';

function Blog(props)
{
  // console.log(props.blog)
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <a href={props.blog.liveURL} target="_blank">
        <h3 className="text-gray-900 text-2xl font-bold mb-2">
          {props.blog.title}
        </h3>
      </a>
      <a href={props.blog.liveURL} target="_blank">
        <p className="font-medium mb-2 text-gray-800 text-lg">
         {props.blog.description}
        </p>
      </a>
      <a href={props.blog.liveURL} target="_blank" >
        <span className='text-blue-500'>Read More</span>
      </a>
    </div>
  );
}

export default Blog;
