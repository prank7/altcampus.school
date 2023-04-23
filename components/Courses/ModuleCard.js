import Image from 'next/image';
import React from 'react';

function ModuleCard({ module }) {
  return (
    <article className="border border-gray-300 flex items-stretch justify-between mx-auto rounded-md">
      <header className="py-4 pl-4">
        <h2 className="text-2xl text-royal-blue-800 font-semibold">{module.name}</h2>
        <p className="text-base text-gray-500">
          Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
        </p>
        <div className="flex items-center mt-5 text-gray-500 gap-x-2">
          <strong className="inline-block bg-gold-400 bg-opacity-40 p-2 rounded-md font-medium text-royal-blue-800">
            Specific Module ★
          </strong>
          <span>•</span>
          <strong className="text-gray-500 font-semibold">16-32 weeks</strong>
        </div>
        <div>
          <ul>
            {module.topics.map((t, i) => {
              return (<li key={i}>{t.name}</li>)
            })}
          </ul>
        </div>
      </header>

      <figure className="">
        <img
          className="h-full inline-block"
          src={`/images/icons/react-large.svg`}
          alt="HTML"
        />
      </figure>
    </article>
  );
}

export default ModuleCard;
