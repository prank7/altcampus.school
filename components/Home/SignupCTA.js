import React from 'react';

function Singup(props) {
  return (
    <section className="py-16 bg-royal-blue-800 bg-curve">
      <article className="container mx-auto px-3 flex items-center font-bold justify-between">
        <h2 className="text-white text-5xl leading-normal max-w-4xl">
          {props.titleA}
          <br />
          {props.titleB}
        </h2>
        <a
          className="bg-green-theme-900 text-white text-center py-6 px-20 rounded text-sm font-semibold"
          href="#"
        >
          {props.action}
        </a>
      </article>
    </section>
  );
}

export default Singup;
