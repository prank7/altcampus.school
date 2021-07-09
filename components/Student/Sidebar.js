import React from 'react';

function Sidebar(props) {
  return (
    <aside className="col-span-3 sticky top-0 shadow-sm rounded-lg bg-white">
      <article>
        <figure className="">
          <img
            className="rounded-lg"
            src="/images/students/Harshaan.jpeg"
            alt="Harshaan Nihaal Khaan"
          />
        </figure>
        <footer className="text-center p-3 font-bold text-dark-blue-600 capitalize text-2xl">
          <h2>Harshaan Nihaal Khan</h2>
          <ul className="flex items-center justify-center mt-2">
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-300 block place-items-center grid rounded-full"
                href="#"
              >
                <img src="/images/icons/twitter.svg" alt="GitHub" />
              </a>
            </li>
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-300 block place-items-center grid rounded-full"
                href="#"
              >
                <img src="/images/icons/twitter.svg" alt="GitHub" />
              </a>
            </li>
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-300 block place-items-center grid rounded-full"
                href="#"
              >
                <img src="/images/icons/twitter.svg" alt="GitHub" />
              </a>
            </li>
            <li className="mx-2">
              <a
                className="w-10 h-10 bg-dark-blue-300 block place-items-center grid rounded-full"
                href="#"
              >
                <img src="/images/icons/twitter.svg" alt="GitHub" />
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </aside>
  );
}

export default Sidebar;
