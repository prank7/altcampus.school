export default function Topics({ title, topics }) {
  return (
    <article className="bg-white p-8 rounded-md shadow-sm topic-list mb-16 mt-8">
      <h4 className="mt-0 text-2xl text-gray-700">{title}</h4>
      <ul className="mt-4">
        {topics.map((topic) => (
          <li
            key={topic}
            className="flex font-medium my-12 list-none items-center"
          >
            <a
              href="{topic.link}"
              className="flex items-center hover:no-underline"
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
            {topic.type === 'paid' && (
              <span className="inline-flex items-center px-2 ml-2 py-0.5 rounded-md text-sm font-medium bg-red-800 text-white">
                PAID
              </span>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
