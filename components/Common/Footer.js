import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, TwitterIcon } from '../Icons';

function Footer(props) {
  return (
    <footer className="mt-7">
      <div className="container px-8 mx-auto sm:px-3 ">
        <div className="border-solid py-7 border-t border-b border-royal-blue-200 grid grid-cols-2 gap-y-8 sm:gap-y-0  sm sm:grid-cols-4">
          <nav>
            <h4 className="text-gray-500 text-sm font-semibold">AltCampus</h4>
            <ul className="mt-5">
              <li>
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/curriculum"
                >
                  Curriculum
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/placements"
                >
                  Success Stories
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/posts"
                >
                  Blog Posts
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-gray-500 text-sm font-semibold">Offerings</h4>
            <ul className="mt-5">
              <li>
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/courses"
                >
                  Full Stack Web Development Track 
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/courses"
                >
                  Backend Development Track 
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/courses"
                >
                  Frontend Development Track 
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/courses"
                >
                  All Courses
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-gray-500 text-sm font-semibold">Policies</h4>
            <ul className="mt-5">
              <li>
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/refund-policy"
                >
                  Refund Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/pricing-policy"
                >
                  Pricing Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="text-gray-500 text-xs hover:text-royal-blue-900 duration-300 ease-in-out transition"
                  href="/terms"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-gray-500 text-sm font-semibold">Follow us</h4>
            <ul className="mt-5 flex items-center">
              <li>
                <a className="text-gray-500 text-xs" href="https://github.com/altcampus">
                  <img
                    className="w-8 h-8"
                    src="/images/icons/github.svg"
                    alt="Github Icon"
                  />
                </a>
              </li>
              <li className="ml-5">
                <a className="text-gray-500 text-xs" href="https://twitter.com/altcampus">
                  <img
                    className="w-8 h-8"
                    src="/images/icons/twitter.svg"
                    alt="Twitter Icon"
                  />
                </a>
              </li>
              <li className="ml-5">
                <a className="text-gray-500 text-xs" href="https://facebook.com/AltCampusIO">
                  <img
                    className="w-8 h-8"
                    src="/images/icons/facebook.svg"
                    alt="Facebook Icon"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container mx-auto py-4 text-gray-500 px-8 sm:px-3 text-xs">
        <small>© Copyright. AltCampus Services Private Limited. 2023</small>
      </div>
    </footer>
  );
}

export default Footer;
