import React from 'react';

function Blog(props) {
  return (
    <section className="py-24">
      <div className="container px-3 mx-auto break-words">
        <header className="text-center mb-20">
          <h2 className="text-5.5xl text-gray-500 font-bold">
            What awaits you inside…
          </h2>
        </header>
        <div className="grid grid-cols-3 gap-x-24">
          <article>
            <img
              className="h-36"
              src="/images/happy-child.svg"
              alt="Happy Child"
            />
            <h3 className="text-royal-blue-800 text-2xl font-bold mt-4">
              Only fun learning environment
            </h3>
            <p className="font-Karla text-gray-500 mt-3">
              Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
              Vestibulum nec erat ut mi sollicitudin porttitor id sit amet
              risus. Nam tempus vel odio vitae.
            </p>
          </article>
          <article>
            <img
              className="h-36"
              src="/images/happy-child2.svg"
              alt="Happy Child"
            />
            <h3 className="text-royal-blue-800 text-2xl font-bold mt-4">
              Only industry relevant knowledge
            </h3>
            <p className="font-Karla text-gray-500 mt-3">
              Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
              Vestibulum nec erat ut mi sollicitudin porttitor id sit amet
              risus. Nam tempus vel odio vitae.
            </p>
          </article>
          <article>
            <img
              className="h-36"
              src="/images/happy-child3.svg"
              alt="Happy Child"
            />
            <h3 className="text-royal-blue-800 text-2xl font-bold mt-4">
              Only awesome practical projects…
            </h3>
            <p className="font-Karla text-gray-500 mt-3">
              Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
              Vestibulum nec erat ut mi sollicitudin porttitor id sit amet
              risus. Nam tempus vel odio vitae.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
