import React from 'react';

function KeyFeatures(props) {
  return (
    <>
      <section className='key-features padding'>
        <div className='container'>
          <div className='key-head'>
            <div className='key-features-heading'>
              <h2>Unparalleled Learning Support</h2>
            </div>
          </div>

          <article className='features'>
            <div className='key-features-cards'>
              <img src='/assets/media/content.svg' alt='content learning' />
              <h4>Exhaustive Course Content</h4>
              <div className='key-features-points'>
                <div className='point-item'>
                  <p className='point-item-title'>
                    Step-by-step learning content. Quality explanatory videos,
                    assignments, and real life projects.
                  </p>
                </div>
              </div>
            </div>
            <div className='key-features-cards'>
              <img src='/assets/media/mentorship.svg' alt='mentorship' />
              <h4>Mentorship & Support</h4>
              <div className='key-features-points'>
                <div className='point-item'>
                  <p className='point-item-title'>
                    Daily live mentor sessions, personalised code reviews, and
                    one-to-one feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className='key-features-cards'>
              <img src='/assets/media/learning.svg' alt='content learning' />
              <h4>Immersive Learning</h4>
              <div className='key-features-points'>
                <div className='point-item'>
                  <p className='point-item-title'>
                    Get matched with peers. Access to the community, hackathons,
                    demo sessions.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className='padding bg-1'>
        <div className='container flex-between mockup'>
          <div className='col-1-2'>
            <h3>Know what, when and how to learn.</h3>
            <h6>
              Don't waste time figuring out the best tutorial or exercises.
            </h6>
            <div className='feature-description'>
              <p>
                Our course is packed with easy to understand videos, small,
                incremental assignments to big projects to set you in the right
                direction and keep you focused on what matters the most -
                <b>building stuff</b>.
              </p>
            </div>
          </div>
          <div className='col-img'>
            <img
              className='img-responsive learn'
              src='/assets/media/demo-mac.svg'
              alt='Mockup'
            />
          </div>
        </div>
      </section>

      <section className='padding bg-2'>
        <div className='container flex-between'>
          <div className='col-img'>
            <img
              className='img-responsive'
              src='/assets/media/help1.svg'
              alt='Mockup'
            />
          </div>
          <div className='col-1-2 padding-left'>
            <h3>Don't be stuck. Get the help you need.</h3>
            <h6>
              Daily, live mentor sessions to clear doubts and provide feedback.
            </h6>
            <div className='feature-description'>
              <p>
                Our every working day, live mentor sessions will help you
                <b>resolve doubts, review code, and get one to one feedback</b>
                to help you learn better and faster. Get your technical
                questions answered quickly by mentors via Slack.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='padding bg-1'>
        <div className='container flex-between'>
          <div className='col-1-2'>
            <h3>Move at your pace, but never alone.</h3>
            <h6>
              Tired of learning alone? Connect, share and grow with peer group.
            </h6>
            <div className='feature-description'>
              <p>
                This course is self-paced but immersive. Our platform will match
                you with peers moving at your pace, with whom you can discuss,
                share and learn. You will participate in
                <b>
                  hackathons, demo sessions, workshops, and community events.
                </b>
              </p>
            </div>
          </div>
          <div className='col-img'>
            <img
              className='img-responsive'
              src='/assets/media/immersive-2.svg'
              alt='Mockup'
            />
          </div>
        </div>
      </section>

      <section className='padding bg-2'>
        <div className='container flex-between'>
          <div className='col-img'>
            <img
              className='img-responsive'
              src='/assets/media/job-ready.svg'
              alt='Mockup'
            />
          </div>
          <div className='col-1-2 padding-left'>
            <h3>Job-ready at a fraction of college cost.</h3>
            <h6>
              Build strong portfolio, get help in job hunt at each step of the
              way.
            </h6>

            <div className='feature-description'>
              <p>
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
      </section>
    </>
  );
}

export default KeyFeatures;
