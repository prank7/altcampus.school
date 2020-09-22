import React from "react";

function Footer(props) {
  return (
    <footer class="py-24 bg-dark-blue-500">
      <div class="container mx-auto px-8 sm:flex sm:justify-between">
        <div class="footer-col1-2 sm:w-2/5">
          <a class="footer-logo" href="/">
            <img
              className="w-28 inline-block"
              src="/assets/media/logo.svg"
              alt="AltCampus Logo"
            />
          </a>
          <p class="text-sm text-gray-500 mt-4">
            Everything you need to become a software developer
          </p>
        </div>
        <div class="footer-col1-2 footer-links sm:w-3/5">
          <div class="sm:flex sm:justify-between">
            <div class="sm:w-1/2">
              <h4 className="text-2xl text-white mb-3 mt-6 sm:mt-0">
                Quick links
              </h4>
              <div class="flex justify-between">
                <ul class="">
                  <li className="mb-2">
                    <a className="text-gray-500 hover:text-gold-600" href="/">
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/#course-details"
                    >
                      Course Details
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/how-it-works"
                    >
                      How it works
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/#testimonials"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/#faqs"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
                <ul class="quick-links">
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/contact"
                      target="_blank"
                    >
                      Contact
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/privacy"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/refund-policy"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/pricing-policy/"
                    >
                      Pricing Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-gray-500 hover:text-gold-600"
                      href="/terms/"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="social">
              <h4 className="text-2xl text-white mb-3 mt-6 sm:mt-0">
                Follow Us
              </h4>
              <ul class="flex">
                <li className="mr-4">
                  <a target="_blank" href="https://facebook.com/AltCampusIO">
                    <img
                      className="w-12"
                      src="/assets/media/facebook-icon.svg"
                      alt="facebook-icon"
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/altcampus">
                    <img
                      className="w-12"
                      src="/assets/media/twitter-icon.svg"
                      alt="twitter-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12 text-gray-700">
        <small>&copy; AltCampus Services Pvt. Ltd, 2018-present.</small>
      </div>
    </footer>
  );
}

export default Footer;
