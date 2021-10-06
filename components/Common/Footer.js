import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, TwitterIcon } from '../Icons';

function Footer(props) {
  return (
    <footer className="mt-7">
      <div className="container mx-auto px-3 py-7 border-solid border-t border-b border-royal-blue-200 grid grid-cols-4">
        <nav>
          <h4 className="text-gray-500 text-sm font-semibold">Altcampus</h4>
          <ul className="mt-5">
            <li>
              <a className="text-gray-500 text-xs" href="#">
                About Us
              </a>
            </li>
            <li className="mt-2">
              <a className="text-gray-500 text-xs" href="#">
                Team
              </a>
            </li>
            <li className="mt-2">
              <a className="text-gray-500 text-xs" href="#">
                Story
              </a>
            </li>
            <li className="mt-2">
              <a className="text-gray-500 text-xs" href="#">
                Community
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h4 className="text-gray-500 text-sm font-semibold">Offerings</h4>
          <ul className="mt-5">
            <li>
              <a className="text-gray-500 text-xs" href="#">
                MERN Course
              </a>
            </li>
            <li className="mt-2">
              <a className="text-gray-500 text-xs" href="#">
                Assessments
              </a>
            </li>
            <li className="mt-2">
              <a className="text-gray-500 text-xs" href="#">
                Bootcamp
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h4 className="text-gray-500 text-sm font-semibold">Write to Us</h4>
          <ul className="mt-5">
            <li>
              <a className="text-gray-500 text-xs" href="#">
                For Feedback
              </a>
            </li>
            <li className="mt-2">
              <a className="text-gray-500 text-xs" href="#">
                For Help
              </a>
            </li>
            <li className="mt-2">
              <a className="text-gray-500 text-xs" href="#">
                Story
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h4 className="text-gray-500 text-sm font-semibold">Follow us</h4>
          <ul className="mt-5 flex items-center">
            <li>
              <a className="text-gray-500 text-xs" href="#">
                <img
                  className="w-8 h-8"
                  src="/images/icons/github.svg"
                  alt="Github Icon"
                />
              </a>
            </li>
            <li className="ml-5">
              <a className="text-gray-500 text-xs" href="#">
                <img
                  className="w-8 h-8"
                  src="/images/icons/twitter.svg"
                  alt="Twitter Icon"
                />
              </a>
            </li>
            <li className="ml-5">
              <a className="text-gray-500 text-xs" href="#">
                <img
                  className="w-8 h-8"
                  src="/images/icons/linkedin.svg"
                  alt="Twitter Icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto py-4 text-gray-500 px-3 text-xs">
        <small>© All Copyrights. Altcampus 2021</small>
      </div>
    </footer>
  );
}

export default Footer;
