import React from "react";

function StartLearningCTA(props) {
  return (
    <section className="cta py-24">
      <div className="container mx-auto px-8">
        <div className="px-12 text-center sm:text-left sm:flex sm:items-center sm:justify-center">
          <h3 className="text-3xl text-white max-w-lg mr-8">
            Every life-changing endeavor starts with a decision. Commit to being
            a better you.
          </h3>
          <a
            className="mt-4 sm:mt-0 bg-white uppercase text-dark-blue-500 py-4 px-12 inline-block rounded shadow-md font-semibold"
            href="https://launchpad.altcampus.school/signup"
          >
            START LEARNING
          </a>
        </div>
      </div>
    </section>
  );
}

export default StartLearningCTA;