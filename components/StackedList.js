import { Email, RightChevron } from './Icons';
import Link from 'next/link';

const StackedList = ({ roadmapsInfo }) => {
  if (!roadmapsInfo) {
    return <></>;
  }
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul>
        {roadmapsInfo.map((roadmapInfo) => (
          <ListItem {...roadmapInfo} key={roadmapInfo.id} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = (props) => {
  return (
    <li className="border-t border-gray-200 hover:bg-gray-50">
      <Link
        href={`/roadmaps/web-development/${props.id}`}
        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      >
        <a>
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="border border-thin border-gray-200 h-12 w-12 rounded-full bg-gray-100"
                  src={props.icon}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <div className="text-lg leading-5 font-semibold text-royal-blue-600 truncate">
                    {props.title || ''}
                  </div>
                  <div className="mt-2 flex items-center text-sm leading-5 text-gray-600">
                    {/* <Email /> */}
                    <span className="truncate">{props.description}</span>
                  </div>
                </div>
                {/* <div className="hidden md:block">
                <div>
                  <div className="text-sm leading-5 text-gray-900">
                    Applied on
                    <time datetime="2020-01-07">January 7, 2020</time>
                  </div>
                  <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Completed phone screening
                  </div>
                </div>
              </div> */}
              </div>
            </div>
            <div>
              <RightChevron className="w-8 h-8" />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default StackedList;
