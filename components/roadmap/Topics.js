import { useContext } from 'react';
import { ModalContext } from '../../pages/community/web-development/[id]';
import { ExternalLinkIcon, VariableIcon } from '@heroicons/react/outline';

export default function Topics({ title, topics, exercises }) {
  let { setOpen } = useContext(ModalContext);

  function getLayout(type, topic) {
    switch (type) {
      case 'free':
        return <FreeTask topic={topic} />;
      case 'paid':
        return <PaidTask topic={topic} setOpen={setOpen} />;
      default:
        return <External topic={topic} />;
    }
  }

  return (
    <>
      <article className="bg-gray-100 p-8 rounded-md shadow-sm topic-list mb-10 mt-8">
        <h3 className="mt-0 text-2xl text-gray-700">{title}</h3>
        <ul className="mt-4">
          {topics.map((topic) => getLayout(topic.type, topic))}
        </ul>
        {exercises && (
          <>
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t-2 border-royal-blue-500" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 py-1 bg-royal-blue-500 text-md font-semibold text-white border">
                  Exercises / Project
                </span>
              </div>
            </div>
            <ul className="mt-4">
              {exercises.map((exercise) => getLayout(exercise.type, exercise))}
            </ul>
          </>
        )}
      </article>
    </>
  );
}
function External({ topic }) {
  return (
    <li
      key={topic}
      className="flex font-medium my-12 list-none items-center underline hover:no-underline"
    >
      <a
        href={topic.link}
        className="flex items-center"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <strong className="ml-4 text-lg text-gray-700 font-normal">
          {topic.text}
        </strong>
        <ExternalLinkIcon
          className="ml-3 h-4 w-4 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
      </a>
    </li>
  );
}
function FreeTask({ topic }) {
  return (
    <li
      key={topic}
      className="flex font-medium my-12 list-none items-center exercise-item"
    >
      <a
        href={topic.link}
        className="flex items-center"
        target="_blank"
        rel="noreferrer noopener"
      >
        <VariableIcon className="h-5 w-5 flex-shrink-0 text-royal-blue-700" />
        <strong className="ml-4 text-lg text-royal-blue-800 font-normal">
          {topic.text}
        </strong>
      </a>
    </li>
  );
}
function PaidTask({ topic, setOpen }) {
  function handleClick() {
    setOpen(true);
  }
  return (
    <li
      key={topic}
      className="flex font-medium my-12 list-none items-start cursor-pointer"
      onClick={handleClick}
    >
      <VariableIcon className="h-5 w-5 flex-shrink-0 text-royal-blue-500" />
      <strong className="ml-4 text-lg text-gray-700 font-normal underline">
        {topic.text}
      </strong>

      <span className="inline-flex items-center px-2 ml-2 py-0.5 rounded-md text-sm font-medium bg-red-800 text-white">
        PRO
      </span>
    </li>
  );
}
