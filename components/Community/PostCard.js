import authors from '../../lib/author.json';
import tinytime from 'tinytime';
import Image from 'next/image';
import Link from 'next/link';

let dateFormatter = tinytime('{MMMM} {DD}, {YYYY}');

export default function PostCard({ post, related }) {
  let author = authors[post.author || 'altcampus'];
  return (
    <div
      key={post.title}
      className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${
        related && 'border'
      }`}
    >
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600"></p>
          <Link href={`/community/posts/${post.id}`}>
            <a className="block mt-2">
              <p className="text-xl font-extrabold text-gray-800 hover:underline">
                {post.title}
              </p>
              {!related && (
                <p className="mt-3 text-base text-gray-600">
                  {post.description}
                </p>
              )}
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{author?.name}</span>
            <div className="relative h-10 w-10 ">
              <Image
                className="rounded-full"
                src={author?.avatar}
                layout="fill"
                alt=""
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-900 font-semibold">{author.name}</p>
            <div className="flex space-x-1 text-sm text-gray-600">
              <time dateTime={post.date}>
                {dateFormatter.render(new Date(post.date))}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime.text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
