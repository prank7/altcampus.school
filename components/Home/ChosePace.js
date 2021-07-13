import React from 'react';
import Link from 'next/link';

function ChosePace(props) {
  return (
    <section className="bg-dark-blue-100 py-24">
      <article className="container mx-auto px-8">
        <header className="text-center">
          <h3 className="font-bold text-5xl mb-12 text-dark-blue-500">
            Pick Your Pace
          </h3>
        </header>
        <div className="md:grid md:grid-cols-2 gap-16">
          <div className="mb-16 md:mb-0">
            <h3 className="text-3xl text-green-theme-500 font-bold mb-4">
              Self Paced
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mb-1 font-mukta">
              Learn at your own pace, along with the community of peers.
            </h6>
            <ul className="text-lg leading-relaxed list-disc pl-4">
              <li className="mb-2">
                Most suited for people wanting to learn fullstack web
                development part time
              </li>
              <li className="mb-2">
                Mentorship is still available in form of daily doubt clearing
                sessions everyday between 6-7pm IST.
              </li>
              <li className="mb-2"> Can ask questions anytime via Slack </li>
              <li className="mb-2">
                Personal code review and one-to-one checkpoints feedback
              </li>
              <li className="mb-2">Job placement support</li>
              <li className="mb-2">
                Access to mentorship for 9 months from the day of enrollment
              </li>
              <li className="mb-2"> Access to content for lifetime</li>
              <li className="mb-2">
                Access to hackathons, demo sessions, workshops, and community
                events.
              </li>
              <li className="mb-2">
                Enroll now, pay later using EMI.{' '}
                <a
                  className="text-royal-blue-500 underline hover:no-underline"
                  href="/apply-for-emi"
                >
                  Apply here to avail.
                </a>
              </li>
            </ul>
            <a
              className="bg-white border-2 border-royal-blue-500 tracking-wider uppercase text-royal-blue-500 px-2 py-1 ml-12 mt-8 hover:shadow-lg transition-shadow ease-in-out duration-200 inline-block rounded-sm font-semibold"
              target="_blank"
              rel="noopener"
              href="https://launchpad.altcampus.school/signup?utm_source=pick-your-pace"
            >
              Enroll now
            </a>
          </div>
          <div className="">
            <h3 className="text-3xl text-green-theme-500 font-bold mb-4">
              Cohort
            </h3>
            <h6 className="text-2xl text-dark-blue-500 mb-1 font-mukta">
              Learn along with other students in a group.
            </h6>

            <ul className="text-lg leading-relaxed list-disc pl-4">
              <li className="mb-2">
                Most suited for people wanting to learn fullstack web
                development full time
              </li>
              <li className="mb-2">
                Required to put in 6-8 hours of effort everyday
              </li>
              <li className="mb-2">Maximum 15 students in a cohort</li>
              <li className="mb-2">
                Daily live mentor session, starts at 10am IST (Monday-Friday).
              </li>
              <li className="mb-2">Can ask questions anytime via Slack</li>
              <li className="mb-2">
                Personal code review and one-to-one checkpoints feedback
              </li>{' '}
              <li className="mb-2">Job placement support</li>
              <li className="mb-2">
                Access to mentorship for 9 months from the day of enrollment
              </li>
              <li className="mb-2">
                hackathons, demo sessions, workshops, and community events.
              </li>
              <li className="mb-2">
                Enroll now, pay later using EMI.{' '}
                <Link className="underline" href="/apply-for-emi">
                  <a
                    className="text-royal-blue-500 underline hover:no-underline"
                    href="/apply-for-emi"
                  >
                    Apply here to avail.
                  </a>
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xl text-dark-blue-700 font-mukta font-semibold">
                Upcoming batches:
              </h4>
              <ul className="mt-6">
                <li className="flex items-center">
                  <p className="text-2xl text-dark-blue-500 font-semibold mb-2">
                    25th July
                  </p>
                  <a
                    className="bg-white border-2 border-royal-blue-500 tracking-wider uppercase text-royal-blue-500 px-2 py-1 ml-6 rounded-sm hover:shadow-lg transition-shadow ease-in-out duration-200 inline-block font-semibold"
                    target="_blank"
                    rel="noopener"
                    href="https://launchpad.altcampus.school/signup?utm_source=pick-your-pace"
                  >
                    Enroll now
                  </a>
                </li>
                <li className="mt-8 flex items-center">
                  <p className="text-2xl text-dark-blue-500 font-semibold mb-2">
                    16th August
                  </p>
                  <a
                    className="bg-white border-2 border-royal-blue-500 tracking-wider uppercase text-royal-blue-500 px-2 py-1 ml-6 rounded-sm inline-block hover:shadow-lg transition-shadow ease-in-out duration-200 font-semibold"
                    target="_blank"
                    rel="noopener"
                    href="https://launchpad.altcampus.school/signup?utm_source=pick-your-pace"
                  >
                    Enroll now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ChosePace;
