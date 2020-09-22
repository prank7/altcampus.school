import React from "react";

function Pricing(props) {
  return (
    <section className="py-24 bg-royal-blue-100">
      <div className="container mx-auto px-8">
        <header className="text-center sm:flex sm:justify-center sm:items-center mb-12">
          <img
            className="inline-block w-12 sm:mr-4"
            src="/assets/media/price-tag.svg"
            alt="pricetag"
          />
          <h2 className="font-bold text-4xl text-dark-blue-500">
            Invest in yourself
          </h2>
        </header>
        <div className="sm:flex sm:justify-center">
          <div className="mb-12 sm:mb-0 sm:mx-8">
            <article className="shadow-2xl bg-white rounded-lg">
              <div className="bg-royal-blue-100 text-center pb-3 relative">
                <img
                  className="w-24 inline-block sm:absolute left-0 top-0"
                  src="/assets/media/pro-medal.svg"
                  alt="rocket launching"
                />
                <div className="">
                  <div className="sm:flex sm:items-center sm:justify-end sm:py-2 sm:px-2">
                    <h2 className="text-3xl font-semibold text-gold-500 mb-4 sm:mr-4 sm:pl-20">
                      Premium
                    </h2>
                    <div className="">
                      <p className="bg-red-200 inline-block py-1 px-2 text-sm font-body text-red-800">
                        28% Off (Early Birds offer)
                      </p>
                      <div className="text-gray-500 my-1">
                        <h4 className="inline-block mx-2 line-through text-2xl font-light">
                          ₹93,749
                        </h4>
                        <p className="inline-block mx-2 line-through font-light">
                          {" "}
                          $1249{" "}
                        </p>
                      </div>
                      <div className="">
                        <h4 className="inline-block mx-2 text-4xl text-royal-blue-500 font-semibold">
                          ₹67,499
                        </h4>
                        <p className="inline-block mx-2 text-2xl text-green-theme-500">
                          $899
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Step by Step course content
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">Assignments</p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">Projects</p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Github student developer pack
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Developer community
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Personalised feedback & Code review
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">Mentorship</p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Access to office hours (Doubt clearing session)
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Coach follow up
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Portfolio preparation
                  </p>
                </li>
              </ul>
            </article>
            <div className="text-center sm:text-right">
              <a
                className="inline-block bg-dark-blue-500 px-12 py-3 sm:px-4 sm:py-2 rounded mt-8"
                href="https://launchpad.altcampus.school/signup?plan=standard"
              >
                <div className="flex items-center">
                  <img
                    className="w-8"
                    src="/assets/media/pro-medal.svg"
                    alt="medal-in-button"
                  />
                  <p className="text-white">BUY NOW</p>
                </div>
              </a>
            </div>
          </div>
          <div className="sm:mx-8">
            <article className="shadow-2xl bg-white rounded-lg">
              <div className="bg-royal-blue-100 text-center pb-3 relative">
                <img
                  className="w-24 inline-block sm:absolute left-0 top-0"
                  src="/assets/media/basic-medal.svg"
                  alt="balloon launching"
                />
                <div className="">
                  <div className="sm:flex sm:items-center sm:justify-end sm:py-2 sm:px-2">
                    <h2 className="text-3xl text-gold-800 font-semibold mb-4 sm:mr-4 sm:pl-20">
                      Standard
                    </h2>
                    <div className="">
                      <p className="bg-red-200 inline-block py-1 px-2 text-sm font-body text-red-800">
                        28% Off (Early Birds offer)
                      </p>
                      <div className="text-gray-500 my-1">
                        <h4 className="inline-block mx-2 line-through text-2xl font-light">
                          ₹56,249
                        </h4>

                        <p className="inline-block mx-2 line-through font-light">
                          $749{" "}
                        </p>
                      </div>
                      <div className="offer-price">
                        <h4 className="inline-block mx-2 text-4xl text-royal-blue-500 font-semibold">
                          ₹40,499
                        </h4>
                        <p className="inline-block mx-2 text-2xl text-green-theme-500">
                          $539
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Step by Step course content
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">Assignments</p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">Projects</p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Github student developer pack
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400">
                    Developer community
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-cross-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400 line-through">
                    Personalised feedback & Code review
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-cross-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400 line-through">
                    Mentorship
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-cross-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400 line-through">
                    Access to office hours (Doubt clearing session)
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-cross-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400 line-through">
                    Coach follow up
                  </p>
                </li>
                <li className="px-5 py-2 flex items-center border-t border-dark-blue-200">
                  <img
                    className="mr-4"
                    src="/assets/media/check-cross-pricing.svg"
                    alt="checked"
                  />
                  <p className="text-base text-dark-blue-400 line-through">
                    Portfolio preparation
                  </p>
                </li>
              </ul>
            </article>
            <div className="text-center sm:text-right">
              <a
                className="inline-block bg-dark-blue-500 px-12 py-3 sm:px-4 sm:py-2 rounded mt-8"
                href="https://launchpad.altcampus.school/signup?plan=standard"
              >
                <div className="flex items-center">
                  <img
                    className="w-8"
                    src="/assets/media/basic-medal.svg"
                    alt="medal-in-button"
                  />
                  <p className="text-white">BUY NOW</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
