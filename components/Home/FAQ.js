import React from "react";

function FAQ(props) {
  return (
    <section id="faqs" className="py-24 bg-royal-blue-100">
      <div className="container mx-auto px-8">
        <header className="text-center mb-12">
          <h3 className="font-bold text-4xl text-dark-blue-500">FAQs</h3>
        </header>

        <div className="">
          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. Who is it for?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              Recent college graduates, students taking gap year, dropouts,
              professionals looking to switch careers, anyone learning web
              development but needs right environment and guidance. No prior
              programming knowledge required.
            </p>
          </div>

          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. Does AltCampus help me get a job?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              Yes. All we can. We help you at every stage, help you build strong
              portfolio, prepare for interviews, put you in touch with companies
              for interview.
            </p>
          </div>

          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. How does the entire process work?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              You can read about it here -{" "}
              <a href="how-it-works/">How it works.</a>
            </p>
          </div>

          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. Is this course self-paced or batched?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              This program follows a blended approach. Students can move at
              their own pace, however they will be matched with peers learning
              same concepts.
            </p>
          </div>

          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. Do I get to interact with mentors live?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              Yes, every working day mentors in all modules hold live, office
              hour sessions where you can ask your doubts and work on problems
              you are facing.
            </p>
          </div>

          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. How can I interact with other students in the community?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              Our custom platform helps you match with your peers and we have a
              private Slack group where you can interact with peers and get live
              help from mentors.
            </p>
          </div>

          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. I am based outside India, can I still enrol in this course?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              Yes. You can enrol in it no matter where you are from. If need be,
              mentors hold office hours two times in 24 hours to accomodate all
              timezones.
            </p>
          </div>

          <div>
            <h3 className="text-green-theme-700 font-semibold text-2xl">
              Q. Can I get a demo before I signup?
            </h3>
            <p className="font-medium text-dark-blue-300 pt-2 pb-8 text-lg">
              <b className="text-2xl mr-3">A.</b>
              Yes, please pick a slot with one of our co-founders{" "}
              <a href="https://calendly.com/prank7/altcampus-one-on-one">
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
