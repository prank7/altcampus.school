import React from "react";

function Header(props) {
  return (
    <header className="py-4 border-b-2 border-green-theme-50">
      <nav className="container flex justify-between mx-auto items-center px-8 relative z-10">
        <a href="/">
          <img className="w-32" src="/assets/media/logo.svg" alt="Logo" />
        </a>
        {/* <label for="toggle" className="bars">
          <img
            className="nav-menu-img"
            src="/assets/media/open-menu.svg"
            alt="menu-icon"
          />
        </label> */}

        {/* <input type="checkbox" className="toggle" id="toggle" /> */}
        <div className="nav-menu">
          {/* <label for="toggle" className="close-menu">
            <img
              className="nav-menu-img"
              src="/assets/media/close.svg"
              alt="menu-icon"
            />
          </label> */}

          {/* <input type="checkbox" className="toggle" id="toggle" /> */}
          <ul className="flex">
            <li>
              <a
                className="text-xl text-dark-blue-300 py-1 border-b-2 border-green-theme-500"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="ml-8">
              <a
                className="text-xl text-dark-blue-300 py-1"
                href="/how-it-works"
              >
                How it works
              </a>
            </li>
            <li className="ml-8">
              <a className="text-xl text-dark-blue-300 py-1" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="ml-8">
              <a className="text-xl text-dark-blue-300 py-1" href="#faqs">
                FAQs
              </a>
            </li>
            <li className="ml-8">
              <a
                className="text-base text-dark-blue-300 uppercase px-4 py-2 border rounded border-green-theme-500 shadow-md font-medium"
                href="https://launchpad.altcampus.school/login"
              >
                login
              </a>
            </li>
            <li className="ml-4">
              <a
                className="font-normal text-base text-white px-4 py-2 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md font-medium"
                href="https://launchpad.altcampus.school/signup"
              >
                signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
