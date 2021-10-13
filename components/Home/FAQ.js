import React from 'react';

function FAQ(props) {
  return (
    <section className="py-10 answer-column">
      <div className="container px-3 mx-auto break-words">
        <header className="text-center mb-20">
          <h2 className="text-5.5xl text-gray-500 font-bold">
            In case you still have questions…
          </h2>
        </header>
        <div className="grid grid-cols-2">
          <article>
            <ul className="border-solid border-r border-royal-blue-200">
              <li className="border-solid border-b border-royal-blue-200 pb-3 active-ques">
                <h3 className="text-2xl text-royal-blue-800 font-bold">
                  Will I be job ready?
                </h3>
                <p className="font-Karla text-gray-500 mt-2">
                  Curabitur lobortis id lorem id bibendum. Ut id consectetur
                  magna. Vestibulum nec.
                </p>
              </li>
              <li className="border-solid border-b border-royal-blue-200 pb-3 mt-4">
                <h3 className="text-2xl text-royal-blue-800 font-bold">
                  Will I get step by step course content?
                </h3>
                <p className="font-Karla text-gray-500 mt-2">
                  Curabitur lobortis id lorem id bibendum. Ut id consectetur
                  magna. Vestibulum nec.
                </p>
              </li>
              <li className="border-solid border-b border-royal-blue-200 pb-3 mt-4">
                <h3 className="text-2xl text-royal-blue-800 font-bold">
                  Will I get mentorship ?
                </h3>
                <p className="font-Karla text-gray-500 mt-2">
                  Curabitur lobortis id lorem id bibendum. Ut id consectetur
                  magna. Vestibulum nec.
                </p>
              </li>
              <li className="border-solid border-b border-royal-blue-200 pb-3 mt-4">
                <h3 className="text-2xl text-royal-blue-800 font-bold">
                  Will I get projects to do?
                </h3>
                <p className="font-Karla text-gray-500 mt-2">
                  Curabitur lobortis id lorem id bibendum. Ut id consectetur
                  magna. Vestibulum nec.
                </p>
              </li>
              <li className="border-solid border-b border-royal-blue-200 pb-3 mt-4">
                <h3 className="text-2xl text-royal-blue-800 font-bold">
                  Will I get help in placement ?
                </h3>
                <p className="font-Karla text-gray-500 mt-2">
                  Curabitur lobortis id lorem id bibendum. Ut id consectetur
                  magna. Vestibulum nec.
                </p>
              </li>
            </ul>
          </article>
          <article className="pl-14">
            <img src="/images/happy-child.svg" alt="Happy Child Graphic" />
            <p className="font-Karla text-royal-blue-800 tracking-tight text-lg mt-8">
              Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
              Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
              Vestibulum nec erat ut mi sollicitudin porttitor id sit amet
              risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id
              lacus vestibulum.
            </p>
            <article className="flex items-center bg-white py-4 pr-6 pl-14 shadow-lg-custom rounded-2xl relative z-10 ml-6 mt-10">
              <p className="font-Karla text-base text-gray-500 leading-relaxed mr-6">
                This is the most detailed, to the point and practical curriculum
                that I have come across during my search of a bootcamp.
                <div className="absolute -left-8 -top-3 transform">
                  <span className="text-center rounded-full text-8xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora font-semibold text-opacity-50">
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
          </article>
        </div>
        <footer className="text-center">
          <a
            href="/stories"
            className="inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center capitalize"
          >
            Read their success stories
          </a>
        </footer>
      </div>
    </section>
  );
}

export default FAQ;
