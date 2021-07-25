export default function Topics({ title, topics }) {
  return (
    <div className="border bg-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-900 rounded p-6 my-4 w-full">
      <span>{title}</span>
      <div className="mt-4">
        {topics.map((topic) => (
          <div key={topic} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
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
            </div>
            <a href={topic.link} className="cursor-pointer">
              <span>{topic.text}</span>
            </a>
            {topic.type === 'paid' && (
              <span className="inline-flex items-center px-2 ml-2 py-0.5 rounded-md text-sm font-medium bg-red-800 text-white">
                PAID
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
