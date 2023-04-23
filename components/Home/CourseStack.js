import Link from 'next/link';
import React from 'react';

function CourseStack(props) {
  return (
    <section className="pt-24 pb-8">
      <div className="container mx-auto px-8 sm:px-3">
        <div className="max-w-5xl mx-auto">
          <header className="mb-7">
            <h4 className="text-xl text-gray-500 ">
              What you are going to learn
            </h4>
          </header>
          <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-9">
            <article className="">
              <h2 className="font-bold text-4xl text-royal-blue-800 leading-snug">
                Most in-demand <br /> skills to be a <br />
                <strong className="text-green-theme-900">
                  Software Developer
                </strong>{' '}
              </h2>
              <p className="font-Karla text-xl tracking-tight text-gray-500 leading-relaxed mt-8">
                Are you ready to become a full-stack web developer? Our courses cover the most in-demand programming skills of today. With our comprehensive curriculum, you'll learn <Link href="/courses/react.js" className="underline">React</Link>, <Link href="/courses/backend-development" className="underline">Express JS, Node JS, and Mongo DB</Link> – the trifecta of web development known as the MERN stack.
              </p>
            </article>
            <div className="relative my-12 md:my-0">
              <figure className="absolute inline-block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-72 h-72 bg-royal-blue-600 bg-opacity-5 rounded-full blur-xl filter"></div>
              </figure>
              <figure className="relative z-10">
                <img
                  className=""
                  src="/images/icons/course-logo.svg"
                  alt="MongoDB Logo"
                />
              </figure>
            </div>
            <article className="">
              <p className="font-Karla text-xl tracking-tight text-gray-500 leading-relaxed mt-8">
                By mastering these powerful tools, you'll be equipped to tackle any project and impress potential employers. Join us and take your skills to the next level!
              </p>
            </article>
            <article className="flex items-center bg-white py-6 px-7 shadow-lg-custom rounded-2xl relative z-10">
              <p className="font-Karla text-base text-gray-500 leading-relaxed mr-6 relative">
                A life changing investment! From zero to deployment, AltCampus full stack MERN course teaches you everything.
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <span className="text-center rounded-full text-8xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora text-opacity-10 font-semibold">
                    “
                  </span>
                </div>
              </p>
              <aside className="min-w-max text-center">
                <img
                  className="w-16 h-16 rounded-full object-cover inline-block"
                  src="/images/students/shastri.svg"
                  alt="Abhishek"
                />
                <div className="mt-4">
                  <h4 className="text-royal-blue-800 font-semibold text-base">
                    Abhishek
                  </h4>
                  <h6 className="text-xxs text-gray-500 uppercase font-normal mt-1">
                    VeGrow
                  </h6>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </div>
      <div className="blur-before blur-after relative z-10 mt-16">
        <div className="bg-white relative z-10">
          <div className="container mx-auto px-8 sm:px-3">
            <article className="max-w-5xl mx-auto py-12">
              <form action="" className="bg-white flex gap-x-14">
                <legend className=" text-2xl text-royal-blue-800 font-semibold max-w-md">
                  Would you like us to send our curriculum outline to your inbox
                  ?
                </legend>
                <fieldset className="flex space-x-6 w-full">
                  <input
                    className="border border-solid border-royal-blue-200 text-base placeholder-gray-500 py-5 px-7 rounded-full inline-block w-4/5 shadow-lg-custom outline-none focus:border-royal-blue-800 text-royal-blue-800"
                    type="email"
                    name="email"
                    placeholder="Enter Your E-Mail ID"
                  />
                  <button className="bg-royal-blue-800 py-4 px-8 rounded-full shadow-lg-custom animate-arrow">
                    <img
                      className="arrow-slide"
                      src="/images/icons/arrow-right-white.svg"
                      alt="Arrow Right Icon"
                    />
                  </button>
                </fieldset>
              </form>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseStack;
