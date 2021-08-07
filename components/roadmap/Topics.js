import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from 'react';
import { ModalContext } from '../../pages/community/web-development/[id]';
import Modal from './Modal';

export default function Topics({ title, topics }) {
  let router = useRouter();
  let { setOpen } = useContext(ModalContext);

  return (
    <>
      <article className="bg-gray-100 p-8 rounded-md shadow-sm topic-list mb-10 mt-8">
        <h3 className="mt-0 text-2xl text-gray-700">{title}</h3>
        <ul className="mt-4">
          {topics.map((topic) =>
            topic.type === 'paid' ? (
              <Paid topic={topic} router={router} setOpen={setOpen} />
            ) : (
              <Free topic={topic} />
            )
          )}
        </ul>
      </article>
    </>
  );
}
function Free({ topic }) {
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
        <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24">
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
      </a>
    </li>
  );
}
function Paid({ topic, setOpen }) {
  function handleClick() {
    setOpen(true);
  }
  return (
    <li
      key={topic}
      className="flex font-medium my-12 list-none items-center cursor-pointer"
      onClick={handleClick}
    >
      <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24">
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
      <strong className="ml-4 text-lg text-gray-700 font-normal underline">
        {topic.text}
      </strong>

      <span className="inline-flex items-center px-2 ml-2 py-0.5 rounded-md text-sm font-medium bg-red-800 text-white">
        PRO
      </span>
    </li>
  );
}
