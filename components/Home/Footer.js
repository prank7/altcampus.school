import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, TwitterIcon } from '../Icons';

function Footer(props) {
  return (
    <footer className="py-24 bg-dark-blue-500">
      <div className="container mx-auto px-8 md:flex md:justify-between">
        <div className="footer-col1-2 md:w-2/5">
          <Link href="/">
            <a className="footer-logo">
              <Image
                height={57}
                width={160}
                className="inline-block w-28"
                src="/assets/media/logo.svg"
                alt="AltCampus Logo"
              />
            </a>
          </Link>
          <p className="text-md text-gray-500 mt-4 pr-4">
            Everything you need to become a software developer. <br />
            <br />
            AltCampus is an online programming bootcamp based out of India and
            provides one of the best MERN stack web development courses.
          </p>
        </div>
        <div className="footer-col1-2 footer-links md:w-3/5">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl text-white mb-3 mt-6 md:mt-0">
                Quick links
              </h2>
              <div className="flex justify-between">
                <ul className="">
                  <li className="mb-2">
                    <Link href="/">
                      <a className="text-gray-500 hover:text-gold-600">Home</a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/curriculum">
                      <a className="text-gray-500 hover:text-gold-600">
                        Curriculum
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/how-it-works">
                      <a className="text-gray-500 hover:text-gold-600">
                        How it works
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/#testimonials">
                      <a className="text-gray-500 hover:text-gold-600">
                        Testimonials
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/placements">
                      <a className="text-gray-500 hover:text-gold-600">
                        Placements
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/community/posts">
                      <a className="text-gray-500 hover:text-gold-600">
                        Blog Posts
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/pricing">
                      <a className="text-gray-500 hover:text-gold-600">
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/#faqs">
                      <a className="text-gray-500 hover:text-gold-600">FAQs</a>
                    </Link>
                  </li>
                </ul>
                <ul className="quick-links">
                  <li className="mb-2">
                    <Link href="/community">
                      <a className="text-gray-500 hover:text-gold-600">
                        Community
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/apply-for-emi">
                      <a className="text-gray-500 hover:text-gold-600">
                        Apply For EMI
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/contact">
                      <a className="text-gray-500 hover:text-gold-600">
                        Contact
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/privacy">
                      <a className="text-gray-500 hover:text-gold-600">
                        Privacy
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/refund-policy">
                      <a className="text-gray-500 hover:text-gold-600">
                        Refund Policy
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/pricing-policy">
                      <a className="text-gray-500 hover:text-gold-600">
                        Pricing Policy
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/terms">
                      <a className="text-gray-500 hover:text-gold-600">Terms</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social">
              <h2 className="text-2xl text-white mb-3 mt-6 md:mt-0">
                Follow Us
              </h2>
              <ul className="flex">
                <li className="mr-4">
                  <a
                    target="_blank"
                    rel="noopener"
                    className="btn-hover inline-block shadow-md rounded-full"
                    href="https://facebook.com/AltCampusIO"
                  >
                    <FacebookIcon className="w-12" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    className="btn-hover inline-block shadow-md rounded-full"
                    href="https://twitter.com/altcampus"
                  >
                    <TwitterIcon className="w-12" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-700">
        <span className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AltCampus Services Private Limited.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
