import React from 'react';

function Story(props) {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-8">
      <figure className="video-container">
        <iframe
          className="video rounded-xl"
          src={props.interviewLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </figure>
    </div>
  );
}

export default Story;
