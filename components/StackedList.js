import { Email, RightChevron } from "./Icons";

const StackedList = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul>
        <ListItem
          name="Unix & Git"
          imageURL="https://cdn.coda.io/icons/svg/color/git.svg"
        />
        <ListItem
          name="HTML & CSS Fundamentals"
          imageURL="https://cdn.coda.io/icons/svg/color/html-5.svg"
        />
        <ListItem
          name="JavaScript Fundamentals"
          imageURL="https://cdn.coda.io/icons/svg/color/js.svg"
        />
        <ListItem
          name="Advanced CSS"
          imageURL="https://cdn.coda.io/icons/svg/color/css3.svg"
        />
        <ListItem
          name="Advanced JavaScript"
          imageURL="https://cdn.coda.io/icons/svg/color/js.svg"
        />
        <ListItem
          name="Node.js"
          imageURL="https://cdn.coda.io/icons/svg/color/node.svg"
        />
        <ListItem
          name="MongoDB"
          imageURL="https://cdn.coda.io/icons/svg/color/mongodb.svg"
        />
        <ListItem
          name="Server side Apps with Express.js and MongoDB"
          imageURL="https://cdn.coda.io/icons/svg/color/react-native.svg"
        />
        <ListItem
          name="API & Auth"
          imageURL="https://cdn.coda.io/icons/svg/color/react-native.svg"
        />
        <ListItem
          name="React.js Fundamentals"
          imageURL="https://cdn.coda.io/icons/svg/color/react-native.svg"
        />
        <ListItem
          name="Advanced React.js"
          imageURL="https://cdn.coda.io/icons/svg/color/react-native.svg"
        />
        <ListItem
          name="Advanced Server Side Applications"
          imageURL="https://cdn.coda.io/icons/svg/color/react-native.svg"
        />
        <ListItem
          name="Web Security & Deployment"
          imageURL="https://cdn.coda.io/icons/svg/color/react-native.svg"
        />
        <ListItem
          name="Job Readiness Challenge"
          imageURL="https://cdn.coda.io/icons/svg/color/react-native.svg"
        />
      </ul>
    </div>
  )
}


const ListItem = (props) => {
  return (
    <li className="border-t border-gray-200">
      <a href="#" className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src={props.imageURL} alt="" />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
              <div className="text-sm leading-5 font-semibold text-indigo-600 truncate">{props.name || ""}</div>
                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                  <Email />
                  <span className="truncate pl-2">Coming Soon</span>
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
            <RightChevron />
          </div>
        </div>
      </a>
    </li>
  )
}

export default StackedList;