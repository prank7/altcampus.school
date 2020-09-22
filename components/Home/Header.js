import React from "react";

function Header(props) {
  return (
    <header className="py-4 border-b-2 border-green-theme-50 z-20 relative">
      <nav className="container flex justify-between mx-auto items-center px-8 relative z-10">
        <a href="/">
          <img className="w-32" src="/assets/media/logo.svg" alt="Logo" />
        </a>
        <label for="toggle" className="bars sm:hidden">
          <img
            className="nav-menu-img w-8"
            src="/assets/media/open-menu.svg"
            alt="menu-icon"
          />
        </label>

        <input type="checkbox" className="toggle hidden" id="toggle" />
        <div className="nav-menu">
          <label for="toggle" className="close-menu sm:hidden">
            <img
              className="nav-menu-img w-8"
              src="/assets/media/close.svg"
              alt="menu-icon"
            />
          </label>

          <input type="checkbox" className="toggle hidden" id="toggle" />
          <ul className="sm:flex sm:items-center">
            <li className="mb-8 sm:mb-0">
              <a
                className="text-4xl sm:text-xl text-gold-500 sm:text-dark-blue-300 py-1 border-b-2 border-green-theme-500"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mb-8 sm:mb-0 sm:ml-8">
              <a
                className="text-4xl sm:text-xl text-gold-500  sm:text-dark-blue-300 py-1"
                href="/how-it-works"
              >
                How it works
              </a>
            </li>
            <li className="mb-8 sm:mb-0 sm:ml-8">
              <a
                className="text-4xl sm:text-xl text-gold-500  sm:text-dark-blue-300 py-1"
                href="/pricing"
              >
                Pricing
              </a>
            </li>
            <li className="mb-8 sm:mb-0 sm:ml-8">
              <a
                className="text-4xl sm:text-xl text-gold-500  sm:text-dark-blue-300 py-1"
                href="#faqs"
              >
                FAQs
              </a>
            </li>
            <li className="mb-8 sm:mb-0 sm:ml-8">
              <a
                className="inline-block text-xl sm:text-base text-white sm:text-dark-blue-300 uppercase px-12 py-4 sm:px-4 sm:py-2 border rounded border-green-theme-500 shadow-md font-medium bg-green-theme-500 sm:bg-transparent"
                href="https://launchpad.altcampus.school/login"
              >
                login
              </a>
            </li>
            <li className="sm:ml-4">
              <a
                className="font-normal inline-block text-xl sm:text-base text-white px-12 py-4 sm:px-4 sm:py-2 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md font-medium"
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