import React from 'react';
import Image from 'next/image';

function Sidebar(props) {
  // const imageLoader = ({ src, width, quality }) => {
  //   return src;
  // };
  // console.log(props);
  return (
    <aside className="col-span-3 top-0 shadow-sm rounded-lg mb-16 bg-white">
      <article>
        <figure className="overflow-hidden">
          <Image
            // loader={imageLoader}
            layout="responsive"
            className="rounded-lg h-full w-full object-cover rounded-b-none"
            src={props.image[0].url || ''}
            alt={props.name}
            width={500}
            height={500}
          />
        </figure>
        <nav className="text-center p-3 font-bold text-dark-blue-600 capitalize text-2xl">
          {/* <h2>{props.name}</h2> */}
          <ul className="flex items-center justify-center mt-2">
            {!props.github ? (
              ''
            ) : (
              <li className="mx-2">
                <a
                  className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                  href={props.github}
                  target="_blank"
                >
                  <img src="/images/icons/github.svg" alt="GitHub" />
                </a>
              </li>
            )}
            {!props.twitter ? (
              ''
            ) : (
              <li className="mx-2">
                <a
                  className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                  href={props.twitter}
                  target="_blank"
                >
                  <img src="/images/icons/twitter-sm.svg" alt="Twitter" />
                </a>
              </li>
            )}
            {!props.linkedin ? (
              ''
            ) : (
              <li className="mx-2">
                <a
                  className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                  href={props.linkedin}
                  target="_blank"
                >
                  <img src="/images/icons/linkedin.svg" alt="Linkedin" />
                </a>
              </li>
            )}
            {!props.email ? (
              ''
            ) : (
              <li className="mx-2">
                <a
                  className="w-10 h-10 bg-dark-blue-200 place-items-center grid rounded-full"
                  href={`mailto:${props.email}`}
                >
                  <img src="/images/icons/email.svg" alt="Email" />
                </a>
              </li>
            )}
          </ul>
        </nav>
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
          <div className="flex items-center mt-4">
            <figure className="w-20">
              <Image
                layout="responsive"
                src="/images/icons/placed.png"
                alt="Placed Stamp"
                height={100}
                width={100}
                // className=""
              />
            </figure>
            <p className="ml-4 text-lg text-royal-blue-500 font-semibold">
              {props.role} at{' '}
              <a
                target="_blank"
                className="hover:underline"
                href={props.companyWebsite}
              >
                {props.company}
              </a>
            </p>
          </div>
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
                  dateTime=""
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
                  dateTime=""
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
