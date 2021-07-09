import React from 'react';

function Blog(props) {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <a href="#">
        <h3 className="text-gray-900 text-2xl font-bold mb-2">Tunes</h3>
      </a>
      <a href="#">
        <p className="font-medium mb-2 text-gray-800 text-lg">
          I'm the Front-End Developer from Udaipur, Raj. currently learning
          javaScript in Dharamshala. Have a serious passion for UI effects,
          animations and creating intuitive, dynamic user experiences. Let's
          make something special.
        </p>
      </a>
    </div>
  );
}

export default Blog;
