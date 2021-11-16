import React from 'react';

function Blog(props) {
  return (
    <section className="py-24">
      <div className="container px-8 sm:px-3 mx-auto break-words">
        <header className="text-center mb-20">
          <h2 className="leading-tight text-4xl sm:text-5.5xl text-gray-500 font-bold">
            What awaits you inside…
          </h2>
        </header>
        <div className="md:grid md:grid-cols-3 md:gap-x-24 space-y-16 md:space-y-0">
          <article className="sm:flex sm:items-center md:block">
            <img
              className="h-36 order-1"
              src="/images/happy-child.svg"
              alt="Happy Child"
            />
            <div className="sm:max-w-2xl md:max-w-none sm:pr-12 md:pr-0">
              <h3 className="text-royal-blue-800 text-2xl font-bold mt-4">
                Only a fun learning environment...
              </h3>
              <p className="font-Karla text-gray-500 mt-3">
                Curabitur lobortis id lorem id bibendum. Ut id consectetur
                magna. Vestibulum nec erat ut mi sollicitudin porttitor id sit
                amet risus. Nam tempus vel odio vitae.
              </p>
            </div>
          </article>
          <article className="sm:flex sm:items-center md:block">
            <img
              className="h-36 order-1"
              src="/images/happy-child2.svg"
              alt="Happy Child"
            />
            <div className="sm:max-w-2xl md:max-w-none sm:pr-12 md:pr-0">
              <h3 className="text-royal-blue-800 text-2xl font-bold mt-4">
                Only industry relevant knowledge..
              </h3>
              <p className="font-Karla text-gray-500 mt-3">
                Curabitur lobortis id lorem id bibendum. Ut id consectetur
                magna. Vestibulum nec erat ut mi sollicitudin porttitor id sit
                amet risus. Nam tempus vel odio vitae.
              </p>
            </div>
          </article>
          <article className="sm:flex sm:items-center md:block">
            <img
              className="h-36 order-1"
              src="/images/happy-child3.svg"
              alt="Happy Child"
            />
            <div className="sm:max-w-2xl md:max-w-none sm:pr-12 md:pr-0">
              <h3 className="text-royal-blue-800 text-2xl font-bold mt-4">
                Only awesome practical projects…
              </h3>
              <p className="font-Karla text-gray-500 mt-3">
                Curabitur lobortis id lorem id bibendum. Ut id consectetur
                magna. Vestibulum nec erat ut mi sollicitudin porttitor id sit
                amet risus. Nam tempus vel odio vitae.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
