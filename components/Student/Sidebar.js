import React from 'react';

function Sidebar(props) {
  return (
    <aside className="col-span-3 sticky top-0 shadow-sm rounded-lg bg-white">
      <article>
        <figure className="h-64 overflow-hidden">
          <img
            className="rounded-lg h-full w-full object-cover rounded-b-none"
            src={props.image[0].url}
            alt={props.name}
          />
        </figure>
        <div className="text-center p-3 font-bold text-dark-blue-600 capitalize text-2xl">
          <h2>{props.name}</h2>
          <ul className="flex items-center justify-center mt-2">
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                href={props.github}
                target="_blank"
              >
                <img src="/images/icons/github.svg" alt="GitHub" />
              </a>
            </li>
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                href={props.twitter}
                target="_blank"
              >
                <img src="/images/icons/twitter-sm.svg" alt="Twitter" />
              </a>
            </li>
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                href={props.linkedin}
                target="_blank"
              >
                <img src="/images/icons/linkedin.svg" alt="Linkedin" />
              </a>
            </li>
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                href={`mailto:${props.email}`}
              >
                <img src="/images/icons/email.svg" alt="Email" />
              </a>
            </li>
          </ul>
        </div>
        {/* <input type="checkbox" id="show-background" hidden />
        <label
          className="flex items-center justify-center text-lg pb-1"
          for="show-background"
        >
          <span className="hover:bg-dark-blue-200 rounded-sm py-0 px-3 mt-2 cursor-pointer flex items-center">
            See more
            <img
              className="w-4 ml-1 mt-1"
              src="/images/icons/caret-down.svg"
              alt="Caret Down"
            />
          </span>
        </label> */}
        <div className="px-8 py-2 student-background">
          <div className="border-t-2 pt-2 flex items-center"></div>
          <div className="mt-5">
            <h3 className="text-lg text-dark-blue-300 font-semibold mb-5">
              Education
            </h3>
            <div className="flex items-start">
              <img
                src="/images/icons/brand-icon.svg"
                className="w-8"
                alt="Brand"
              />
              <div className="ml-6">
                <h3 className="text-md font-semibold text-dark-blue-700">
                  Full Stack Certification
                </h3>
                <h4 className="text-md font-semibold text-dark-blue-700">
                  AltCampus School
                </h4>
                <time
                  className="text-md font-semibold text-dark-blue-300"
                  datetime=""
                >
                  2018-2019
                </time>
              </div>
            </div>
            <div className="flex items-start mt-4">
              <img
                src="/images/icons/grad-hat.svg"
                className="w-8"
                alt="Graduation Hat"
              />
              <div className="ml-6">
                <h3 className="text-md font-semibold text-dark-blue-700">
                  {props.highestEducation}
                </h3>
                {/* <h4 className="text-md font-semibold text-dark-blue-700">
                  B.com, Commerce
                </h4> */}
                <time
                  className="text-md font-semibold text-dark-blue-300"
                  datetime=""
                >
                  {props.graduationYear}
                </time>
              </div>
            </div>
          </div>
        </div>
      </article>
    </aside>
  );
}

export default Sidebar;