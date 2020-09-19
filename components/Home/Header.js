import React from 'react';

function Header(props) {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='/' className='logo'>
          <img className='logo-img' src='/assets/media/logo.svg' alt='Logo' />
        </a>
        <label for='toggle' className='bars'>
          <img
            className='nav-menu-img'
            src='/assets/media/open-menu.svg'
            alt='menu-icon'
          />
        </label>

        <input type='checkbox' className='toggle' id='toggle' />
        <div className='nav-menu'>
          <label for='toggle' className='close-menu'>
            <img
              className='nav-menu-img'
              src='/assets/media/close.svg'
              alt='menu-icon'
            />
          </label>

          <input type='checkbox' className='toggle' id='toggle' />
          <ul className='nav-ul'>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/how-it-works'>
                How it works
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/pricing'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#faqs'>
                FAQs
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn login-header'
                href='https://launchpad.altcampus.school/login'
              >
                login
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn signup-header'
                href='https://launchpad.altcampus.school/signup'
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
