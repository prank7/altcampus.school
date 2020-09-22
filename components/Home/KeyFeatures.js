import React from "react";

function KeyFeatures(props) {
  return (
    <>
      <section className="bg-dark-blue-50 py-24">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h2 className="font-bold text-4xl mb-12 text-dark-blue-500">
              Unparalleled Learning Support
            </h2>
          </div>

          <article className="text-center sm:flex sm:items-start">
            <div className="sm:mx-3">
              <img
                className="inline-block h-32"
                src="/assets/media/content.svg"
                alt="content learning"
              />
              <h4 className="text-xl uppercase text-dark-blue-500 font-semibold mt-8 mb-2">
                Exhaustive Course Content
              </h4>
              <p className="text-dark-blue-300 text-base">
                Step-by-step learning content. Quality explanatory videos,
                assignments, and real life projects.
              </p>
            </div>
            <div className="my-12 sm:my-0 sm:mx-3">
              <img
                className="inline-block h-32"
                src="/assets/media/mentorship.svg"
                alt="mentorship"
              />
              <h4 className="text-xl uppercase text-dark-blue-500 font-semibold mt-8 mb-2">
                Mentorship & Support
              </h4>
              <p className="text-dark-blue-300 text-base">
                Daily live mentor sessions, personalised code reviews, and
                one-to-one feedback.
              </p>
            </div>
            <div className="sm:mx-3">
              <img
                className="inline-block h-32"
                src="/assets/media/learning.svg"
                alt="content learning"
              />
              <h4 className="text-xl uppercase text-dark-blue-500 font-semibold mt-8 mb-2">
                Immersive Learning
              </h4>
              <p className="text-dark-blue-300 text-base">
                Get matched with peers. Access to the community, hackathons,
                demo sessions.
              </p>
            </div>
          </article>
        </div>
      </section>

      <article className="bg-dark-blue-100 py-24">
        <div className="container mx-auto sm:flex sm:items-center px-8">
          <div className="sm:order-1 mb-8 sm:mb-0 sm:w-2/5">
            <img
              className="w-full"
              src="/assets/media/demo-mac.svg"
              alt="Mockup"
            />
          </div>
          <div className="sm:w-3/5">
            <h3 className="text-3xl text-green-theme-500">
              Know what, when and how to learn.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-4">
              Don't waste time figuring out the best tutorial or exercises.
            </h6>
            <div className="">
              <p className="text-lg text-dark-blue-300 leading-relaxed">
                Our course is packed with easy to understand videos, small,
                incremental assignments to big projects to set you in the right
                direction and keep you focused on what matters the most -
                <b>building stuff</b>.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="padding py-24 bg-dark-blue-50">
        <div className="container mx-auto sm:flex sm:items-center px-8">
          <div className="mb-8 sm:mb-0 sm:w-2/5">
            <img
              className="w-full max-w-xs"
              src="/assets/media/help1.svg"
              alt="Mockup"
            />
          </div>
          <div className="sm:w-3/5 sm:pl-12">
            <h3 className="text-3xl text-royal-blue-500">
              Don't be stuck. Get the help you need.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-4">
              Daily, live mentor sessions to clear doubts and provide feedback.
            </h6>
            <div>
              <p className="text-lg text-dark-blue-300 leading-relaxed">
                Our every working day, live mentor sessions will help you
                <b>resolve doubts, review code, and get one to one feedback</b>
                to help you learn better and faster. Get your technical
                questions answered quickly by mentors via Slack.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-dark-blue-100 py-24">
        <div className="container mx-auto sm:flex sm:items-center px-8">
          <div className="sm:order-1 mb-8 sm:mb-0 sm:w-2/5 text-right">
            <img
              className="w-full max-w-xs inline-block"
              src="/assets/media/immersive-2.svg"
              alt="Mockup"
            />
          </div>
          <div className="sm:w-3/5">
            <h3 className="text-3xl text-green-theme-500">
              Move at your pace, but never alone.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-4">
              Tired of learning alone? Connect, share and grow with peer group.
            </h6>
            <div>
              <p className="text-lg text-dark-blue-300 leading-relaxed">
                This course is self-paced but immersive. Our platform will match
                you with peers moving at your pace, with whom you can discuss,
                share and learn. You will participate in{" "}
                <b>
                  hackathons, demo sessions,workshops, and community events.
                </b>
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="padding py-24 bg-dark-blue-50">
        <div className="container mx-auto sm:flex sm:items-center px-8">
          <div className="mb-8 sm:mb-0 sm:w-2/5">
            <img
              className="w-full max-w-xs"
              src="/assets/media/job-ready.svg"
              alt="Mockup"
            />
          </div>
          <div className="sm:w-3/5 sm:pl-12">
            <h3 className="text-3xl text-royal-blue-500">
              Job-ready at a fraction of college cost.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-4">
              Build strong portfolio, get help in job hunt at each step of the
              way.
            </h6>

            <div>
              <p className="text-lg text-dark-blue-300 leading-relaxed">
                Along the way, we help you
                <b>
                  build a strong portfolio, take our job readiness challenge, do
                  career counselling, and prepare you for job interviews
                </b>
                and then match you with companies that are hiring.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default KeyFeatures;