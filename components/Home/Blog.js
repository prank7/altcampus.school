import React from 'react';

function Blog(props) {
  return (
    <section className="py-24">
      <div className="container px-8 sm:px-3 mx-auto break-words">
        <header className="text-center mb-20">
          <h2 className="leading-tight text-4xl sm:text-5.5xl text-gray-500 font-bold">
            What awaits you inside
          </h2>
        </header>
        <div className="md:grid md:grid-cols-3 md:gap-x-24 space-y-16 md:space-y-0">
          <article className="sm:flex sm:items-center md:block">
            <img
              className="h-36 order-1"
              src="/images/happy-child.svg"
              alt="Web development courses"
            />
            <div className="sm:max-w-2xl md:max-w-none sm:pr-12 md:pr-0">
              <h3 className="text-royal-blue-800 text-2xl font-bold mt-4">
                <span className='text-green-theme-900'>188 hours</span> of bite sized, step-by-step video content
              </h3>
              <p className="font-Karla text-gray-500 mt-3">
                With 188 hours of expertly crafted  bite-sized, step-by-step video content, you'll have everything you need to master the ins and outs of full-stack web development. <br/><br/> Learn at your own pace, build skills and launch your dream career on your own schedule.
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
                Followed by <span className='text-green-theme-900'>100+</span> exercises and projects
              </h3>
              <p className="font-Karla text-gray-500 mt-3">
                In addition to extensive video content, our program includes over 100 hands-on exercises and real-world projects that help you build practical skills and apply it in real-world scenarios. 
                <br/><br/>
                By the time you complete the course, you'll have a robust portfolio to showcase to potential employers.
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
                A dedicated module on landing your <span className='text-green-theme-900'> dream job</span>
              </h3>
              <p className="font-Karla text-gray-500 mt-3">
                Our program includes a dedicated module on portfolio building and job hunting to help you launch your career as a full-stack web developer.
                <br/><br/>
                You'll learn how to create an impressive portfolio and get our tips for navigating the job market and landing your dream job.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
