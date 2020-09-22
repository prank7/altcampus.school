import React from "react";

function LetsTalk(props) {
  return (
    <section className="cta py-24">
      <div className="container mx-auto">
        <div className="px-12 text-center sm:text-left sm:flex sm:items-center sm:justify-center">
          <div>
            <h3 className="text-3xl text-white max-w-lg mr-8">
              Still have doubts? Talk to us!
            </h3>
            <h5 className="text-white">Get on a call with our co-founder.</h5>
          </div>

          <a
            className="mt-4 sm:mt-0 bg-white uppercase text-dark-blue-500 py-4 px-12 inline-block rounded shadow-md font-semibold"
            href="https://launchpad.altcampus.school/signup"
          >
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
