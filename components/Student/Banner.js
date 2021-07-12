import React from 'react';

function Banner(props) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-24">
        {/* <header className="text-center">
          <h1 className="text-dark-blue-600 text-5xl font-bold">
            Harshaan Nihal Khaan
          </h1>
          <h3 className="text-royal-blue-500 text-xl font-semibold mb-8">
            Software Engineer, BigBinary
          </h3>
        </header> */}
        <div className="video-container">
          <iframe
            className="video rounded-xl"
            src="https://www.youtube.com/embed/PHWNI-cDAt4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Banner;
