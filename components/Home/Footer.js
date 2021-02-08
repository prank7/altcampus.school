import React from 'react';
import Link from 'next/link';

function Footer(props) {
  return (
    <footer className='py-24 bg-dark-blue-500'>
      <div className='container mx-auto px-8 md:flex md:justify-between'>
        <div className='footer-col1-2 md:w-2/5'>
          <Link href='/'>
            <a className='footer-logo'>
              <img
                className='w-28 inline-block'
                src='/assets/media/logo.svg'
                alt='AltCampus Logo'
              />
            </a>
          </Link>
          <p className='text-sm text-gray-500 mt-4'>
            Everything you need to become a software developer
          </p>
        </div>
        <div className='footer-col1-2 footer-links md:w-3/5'>
          <div className='md:flex md:justify-between'>
            <div className='md:w-1/2'>
              <h4 className='text-2xl text-white mb-3 mt-6 md:mt-0'>
                Quick links
              </h4>
              <div className='flex justify-between'>
                <ul className=''>
                  <li className='mb-2'>
                    <Link href='/'>
                      <a className='text-gray-500 hover:text-gold-600'>Home</a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/#course-details'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Course Details
                      </a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/how-it-works'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        How it works
                      </a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/#testimonials'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Testimonials
                      </a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/pricing'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/#faqs'>
                      <a className='text-gray-500 hover:text-gold-600'>FAQs</a>
                    </Link>
                  </li>
                </ul>
                <ul className='quick-links'>
                  <li className='mb-2'>
                    <Link href='/community'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Community
                      </a>
                    </Link>
                  </li>

                  <li className='mb-2'>
                    <Link href='/contact'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Contact
                      </a>
                    </Link>
                  </li>

                  <li className='mb-2'>
                    <Link href='/privacy'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Privacy
                      </a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/refund-policy'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Refund Policy
                      </a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/pricing-policy'>
                      <a className='text-gray-500 hover:text-gold-600'>
                        Pricing Policy
                      </a>
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='/terms'>
                      <a className='text-gray-500 hover:text-gold-600'>Terms</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='social'>
              <h4 className='text-2xl text-white mb-3 mt-6 md:mt-0'>
                Follow Us
              </h4>
              <ul className='flex'>
                <li className='mr-4'>
                  <a
                    target='_blank'
                    className='btn-hover inline-block shadow-md rounded-full'
                    href='https://facebook.com/AltCampusIO'
                  >
                    <img
                      className='w-12'
                      src='/assets/media/facebook-icon.svg'
                      alt='facebook-icon'
                    />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    className='btn-hover inline-block shadow-md rounded-full'
                    href='https://twitter.com/altcampus'
                  >
                    <img
                      className='w-12'
                      src='/assets/media/twitter-icon.svg'
                      alt='twitter-icon'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-12 text-gray-700'>
        <small>
          &copy; {new Date().getFullYear()} AltCampus Services Pvt. Ltd.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
