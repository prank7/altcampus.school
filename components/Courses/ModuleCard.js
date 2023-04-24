import Image from 'next/image';
import React from 'react';

function ModuleCard({ module }) {
  return (
    <article className="border border-gray-300 mx-auto rounded-md p-4">
      <header className="flex">
        <div className="max-w-sm">
          <h2 className="text-2xl text-royal-blue-800 font-semibold">
            {module.name}
          </h2>
          <p className="text-base text-gray-500 mt-2">
            Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
          </p>
        </div>
        <figure className="">
          <img className="w-16" src={`/images/icons/react.svg`} alt="HTML" />
        </figure>
      </header>

      <div>
        <ul className="list-disc pl-4 mt-8">
          {module.topics.map((t, i) => {
            return (
              <li className="text-base text-gray-500 max-w-sm my-2" key={i}>
                {t.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center mt-8 text-gray-500 gap-x-2 border-t border-gray-200 pt-4">
        <strong className="inline-block bg-gold-400 bg-opacity-40 p-2 rounded-md font-medium text-royal-blue-800">
          Specific Module ★
        </strong>
        <span>•</span>
        <strong className="text-gray-500 font-semibold">16-32 weeks</strong>
      </div>
    </article>
  );
}

export default ModuleCard;
