import React from 'react';

function KeyFeatures(props) {
  return (
    <>
      <section className="bg-dark-blue-50 py-24">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h2 className="font-bold text-5xl mb-12 text-dark-blue-500">
              Unparalleled Learning Support
            </h2>
          </div>

          <article className="text-center md:flex md:items-start">
            <div className="md:mx-4 px-4">
              <img
                className="inline-block h-24"
                src="/assets/media/content.svg"
                alt="content learning"
              />
              <h4 className="text-xl uppercase text-dark-blue-500 font-w600 mt-8 mb-2 font-mukta tracking-wide">
                Exhaustive Course Content
              </h4>
              <p className="feature-desc text-lg sm:text-base">
                Step-by-step learning content. Quality explanatory videos,
                assignments, and real life projects.
              </p>
            </div>
            <div className="my-12 md:my-0 md:mx-4 px-4">
              <img
                className="inline-block h-24"
                src="/assets/media/mentorship.svg"
                alt="mentorship"
              />
              <h4 className="text-xl uppercase text-dark-blue-500 font-w600 mt-8 mb-2 font-mukta tracking-wide">
                Mentorship & Support
              </h4>
              <p className="feature-desc text-lg sm:text-base">
                Daily live mentor sessions, personalised code reviews, and
                one-to-one feedback.
              </p>
            </div>
            <div className="md:mx-4 px-4">
              <img
                className="inline-block h-24"
                src="/assets/media/learning.svg"
                alt="content learning"
              />
              <h4 className="text-xl uppercase text-dark-blue-500 font-w600 mt-8 mb-2 font-mukta tracking-wide">
                Immersive Learning
              </h4>
              <p className="feature-desc text-lg sm:text-base">
                Get matched with peers. Access to the community, hackathons,
                demo sessions.
              </p>
            </div>
          </article>
        </div>
      </section>

      <article className="bg-dark-blue-100 py-24">
        <div className="mx-auto md:flex md:items-center px-16">
          <div className="md:order-1 mb-8 md:mb-0 md:w-2/5">
            <img
              className="w-full"
              src="/assets/media/demo-mac.svg"
              alt="Mockup"
            />
          </div>
          <div className="md:w-3/5">
            <h3 className="text-3xl text-green-theme-500 font-bold">
              Know what, when and how to learn.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-5 font-mukta">
              Don't waste time figuring out the best tutorial or exercises.
            </h6>
            <div className="">
              <p className="text-lg feature-desc leading-relaxed">
                Our course is packed with easy to understand videos, small,
                incremental assignments to big projects to set you in the right
                direction and keep you focused on what matters the most -
                <b className="font-semibold">building stuff</b>.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="padding py-24 bg-dark-blue-50">
        <div className="mx-auto md:flex md:items-center px-16 ">
          <div className="mb-8 md:mb-0 md:w-2/5 text-center md:text-left">
            <img
              className="w-full max-w-xs inline-block"
              src="/assets/media/help1.svg"
              alt="Mockup"
            />
          </div>
          <div className="md:w-3/5 md:pl-12">
            <h3 className="text-3xl text-royal-blue-500 font-bold">
              Don't be stuck. Get the help you need.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-5 font-mukta">
              Daily, live mentor sessions to clear doubts and provide feedback.
            </h6>
            <div>
              <p className="text-lg feature-desc leading-relaxed">
                Our every working day, live mentor sessions will help you
                <b className="font-semibold">
                  {" "}
                  resolve doubts, review code, and get one to one feedback{" "}
                </b>
                to help you learn better and faster. Get your technical
                questions answered quickly by mentors via Slack.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-dark-blue-100 py-24">
        <div className="mx-auto md:flex md:items-center px-16">
          <div className="md:order-1 mb-8 md:mb-0 md:w-2/5 text-center md:text-right">
            <img
              className="w-full max-w-xs inline-block"
              src="/assets/media/immersive-2.svg"
              alt="Mockup"
            />
          </div>
          <div className="md:w-3/5">
            <h3 className="text-3xl text-green-theme-500 font-bold">
              Move at your pace, but never alone.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-5 font-mukta">
              Tired of learning alone? Connect, share and grow with peer group.
            </h6>
            <div>
              <p className="text-lg feature-desc leading-relaxed">
                This course is self-paced but immersive. Our platform will match
                you with peers moving at your pace, with whom you can discuss,
                share and learn. You will participate in{" "}
                <b className="font-semibold">
                  hackathons, demo sessions, workshops, and community events.
                </b>
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="padding py-24 bg-dark-blue-50">
        <div className="mx-auto md:flex md:items-center px-16">
          <div className="mb-8 md:mb-0 md:w-2/5 text-center md:text-left">
            <img
              className="w-full max-w-xs inline-block"
              src="/assets/media/job-ready.svg"
              alt="Mockup"
            />
          </div>
          <div className="md:w-3/5 md:pl-12">
            <h3 className="text-3xl text-royal-blue-500 font-bold">
              Job-ready at a fraction of college cost.
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mt-1 mb-5 font-mukta">
              Build strong portfolio, get help in job hunt at each step of the
              way.
            </h6>

            <div>
              <p className="text-lg feature-desc leading-relaxed">
                Along the way, we help you
                <b className="font-semibold">
                  {" "} build a strong portfolio, take our job readiness challenge, do
                  career counselling, and prepare you for job interviews
                </b>
                {""}
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
