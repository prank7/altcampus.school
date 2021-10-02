import React from 'react';

function CourseStack(props) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-3">
        <h3 className="text-center font-bold text-gray-500 text-2xl">
          What Separates Us…
        </h3>
        <div className="max-w-5xl mx-auto grid grid-cols-2 mt-28 gap-x-16 gap-y-9">
          <article className="">
            <h2 className="font-bold text-4xl text-royal-blue-800 leading-snug">
              Exhaustive{' '}
              <strong className="text-green-theme-900">
                MERN <br /> stack
              </strong>{' '}
              course content
            </h2>
            <p className="font-Karla text-xl tracking-tight text-gray-500 leading-relaxed mt-8">
              Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
              Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
              Vestibulum nec erat ut.
            </p>
          </article>
          <div className="self-end grid grid-cols-2 gap-x-5 gap-y-8 relative">
            <figure className="absolute inline-block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-72 h-72 bg-royal-blue-600 bg-opacity-5 rounded-full blur-xl filter"></div>
            </figure>
            <figure className="bg-white shadow-lg-custom px-8 py-6 rounded-full relative z-10">
              <img
                className="h-12"
                src="/images/icons/mongo.svg"
                alt="MongoDB Logo"
              />
            </figure>
            <figure className="bg-white shadow-lg-custom px-8 py-6 rounded-full relative z-10">
              <img
                className="h-12"
                src="/images/icons/express-js.svg"
                alt="Express JS Logo"
              />
            </figure>
            <figure className="bg-white shadow-lg-custom px-8 py-6 rounded-full relative z-10">
              <img
                className="h-12"
                src="/images/icons/react-js.svg"
                alt="React JS Logo"
              />
            </figure>
            <figure className="bg-white shadow-lg-custom px-8 py-6 rounded-full relative z-10">
              <img
                className="h-12"
                src="/images/icons/node-js.svg"
                alt="Node JS Logo"
              />
            </figure>
          </div>

          <form action="" className="self-end">
            <legend className="text-xl font-semibold text-gray-500 mb-4">
              Get the Curriculum Deliverd to You
            </legend>
            <fieldset className="flex space-x-6">
              <input
                className="border border-solid border-royal-blue-200 text-base placeholder-gray-500 py-5 px-7 rounded-full inline-block w-4/5 shadow-lg-custom outline-none focus:border-royal-blue-800 text-royal-blue-800"
                type="email"
                name="email"
                placeholder="Enter Your E-Mail ID"
              />
              <button className="bg-royal-blue-800 py-4 px-8 rounded-full shadow-lg-custom">
                <img
                  src="/images/icons/arrow-right-white.svg"
                  alt="Arrow Right Icon"
                />
              </button>
            </fieldset>
          </form>
          <article className="flex items-center bg-white py-6 px-7 shadow-lg-custom rounded-2xl relative z-10">
            <p className="font-Karla text-base text-gray-500 leading-relaxed mr-6 relative">
              This is the most detailed, to the point and practical curriculum
              that I have come across during my search of a bootcamp.
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className="text-center rounded-full text-8xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora text-opacity-10 font-semibold">
                  “
                </span>
              </div>
            </p>
            <aside>
              <img src="/images/students/sachin.svg" alt="Sachin" />
              <div className="mt-4">
                <h4 className="text-royal-blue-800 font-semibold text-base">
                  Sachin
                </h4>
                <h6 className="text-xxs text-gray-500 uppercase font-normal mt-1">
                  ClearTax
                </h6>
              </div>
            </aside>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CourseStack;
