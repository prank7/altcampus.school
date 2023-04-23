import React from 'react';

function CourseFeedback() {
  return (
    <section className="py-16 bg-multi-color bg-cover bg-no-repeat px-8">
      <article className="max-w-3xl mx-auto flex items-center bg-white justify-between px-8 py-7 rounded-xl">
        <div class="-ml-12 sm:-ml-16">
          <span class="text-center rounded-full text-5.5xl text-white block w-16 h-16 bg-gray-500 -shadow-md-custom pt-1 font-bold transform -scale-y-1">
            “
          </span>
        </div>
        <p className="max-w-xl text-base text-gray-500">
          AltCampus is an experience and life changing journey for me. It shaped
          my thought and I learnt to focus on process. Mentors helped me to
          learn coding from zero to professional level. Thankyou AltCampus for
          opening door to new horizons.
        </p>
        <div className="text-center">
          <img
            className="inline-block"
            src="/images/students/ashik.svg"
            alt=""
          />
          <h5 className="text-base font-semibold text-royal-blue-800 mt-2">
            Ashik Raj
          </h5>
          <strong className="text-sm text-gray-500 font-normal">
            Out of Box
          </strong>
        </div>
      </article>
    </section>
  );
}

export default CourseFeedback;
