import React from 'react';

function Checklist(props) {
  return (
    <section className="py-16 bg-royal-blue-800 bg-curve text-center md:text-left text-white">
      <article className="container mx-auto px-8 sm:px-3 md:flex items-end font-bold justify-between">
        <div className="md:w-6/12">
          <h4 className="text-xl font-normal">
            Want to be a developer but don’t know how to start ?
          </h4>
          <h2 className="text-4xl font-bold mt-4 leading-normal">
            Get a Developer’s ultimate checklist delivered to your inbox!
          </h2>
        </div>

        <form action="" className="md:w-6/12 md:pl-24 mt-8 md:mt-0">
          <fieldset className="flex">
            <input
              className="border border-solid border-royal-blue-200 text-base placeholder-gray-500 py-5 px-7 rounded-full inline-block w-4/5 shadow-lg-custom outline-none focus:border-royal-blue-800 text-royal-blue-800"
              type="email"
              name="email"
              placeholder="Enter Your E-Mail ID"
            />
            <button className="bg-white ml-8 py-4 px-8 rounded-full shadow-lg-custom animate-arrow">
              <img
                className="arrow-slide"
                src="/images/icons/arrow-right-green.svg"
                alt="Arrow Right Icon"
              />
            </button>
          </fieldset>
        </form>
      </article>
    </section>
  );
}

export default Checklist;
