import Image from 'next/image';
import React from 'react';
import courseData from '../../data/course.json';

function ModuleCard({ module }) {
  let estimatedTime = module.estimatedTimeToComplete || module.topics.reduce((sum, a)=> sum += a.estimatedTimeToComplete, 0)
  const lowerNumOfWeeks = Math.floor(estimatedTime/(60*4*5)); // 3 hours - 5 days a week
  const upperNumOfWeeks = Math.ceil(estimatedTime/(60*3*4)); // 3 hours - 4 days a week

  return (
    <article className="border border-gray-300 mx-auto max-w-2xl rounded-md p-4">
      <header className="grid grid-cols-8">
        <div className="col-span-6">
          <h2 className="text-2xl text-royal-blue-800 font-semibold">
            {module.name}
          </h2>
          <p className="text-base text-gray-500 mt-2">{module.description}</p>
        </div>
        <figure className="col-span-2 flex justify-center text-center">
          <img className="w-24 " src={ module.image || courseData.modules[module.name].image || `/images/icons/react.svg`} alt={module.name} />
        </figure>
      </header>

      {/* <div>
        <ul className="list-disc pl-4 mt-8">
          {module.topics.map((t, i) => {
            return (
              <li className="text-base text-gray-500 max-w-sm my-2" key={i}>
                {t.name}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="flex items-center mt-8 text-gray-500 gap-x-2 border-t border-gray-200 pt-4">
        <strong className="inline-block bg-gold-400 bg-opacity-40 p-2 rounded-md font-medium text-royal-blue-800">
          Module
        </strong>
        <span>•</span>
        <strong className="text-gray-500 font-semibold">{lowerNumOfWeeks}-{upperNumOfWeeks} weeks</strong>
      </div>
    </article>
  );
}

export default ModuleCard;
